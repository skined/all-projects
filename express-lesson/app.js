let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let jwt = require('jsonwebtoken')
//express是个函数
let app = express()
//cors跨域 cors跨域全称叫做跨域资源共享
//中间件的使用都是app.use
app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
// 进行登录持久化验证的接口  访问这个接口的时候一定要携带token 前端页面每切换一次 就访问一下这个接口 问下我有没有登录/登录过期
// jwt.verify 对token进行解码验证token的合法性
app.post('/validate', function(req, res) {
  let token = req.headers.authorization
  jwt.verify(token, 'abcd', function(err, decode) {
    if (err) {
      res.json({
        msg: '当前用户未登录'
      })
    } else {
      //证明用户已经登录 只要用户有操作就要延长过期时间
      res.json({
        user: decode.user,
        token: jwt.sign({ user: decode.user }, 'abcd', {
          expiresIn: '1'
        })
      })
    }
  })
})
// jwt.sign 进行加密的方法
//sign第一参数加密对象 第二个参数加密的规则 expiresIn :过期时间
//持久化登录的原理  第一次登录的是会返回一个经过加密的token  下次一次访问接口（携带登录返回给你的token）的时候会对token进行解密如果解密正在证明你已经登录再把过期时间延长
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGlsaSIsImlhdCI6MTU1OTEzMjUwMCwiZXhwIjoxNTU5MTM2MTAwfQ.ZTLWWbH7iCSRkct0oWzvPHyWxCO92a01IOSCyOT2YBU
//模拟一个登录的接口 user pass
app.post('/login', function(req, res) {
  let { user } = req.body
  console.log(user)
  res.json({
    token: jwt.sign({ user: user }, 'abcd', {
      expiresIn: '1'
    }),
    user
  })
})
//get和delete方式的请求
let banner = require('./banner')
//http://localhost:3000/banner?id=1
app.get('/banner', function(req, res) {
  console.log(req.query.id)
  res.json({
    banner
  })
})
//post 和put请求都有请求体 {name:1}
// axios.post('/s',{name:1})
app.post('/s', function(req, res) {
  console.log(req.body)
  res.json({
    code: 200
  })
})

//app 就是我们的拿到的服务器
app.listen(3000, function() {
  console.log('服务器启动成功，端口号3000')
})
//listen后面跟着的是端口号
