require('./style.css')
require('./a.less')
require('./b.css')
// import '@babel-polyfill'  引入ie6,ie7最大的一个补丁包 没有特殊情况请勿下载
console.log('金宁是狗')

class A {
  log() {
    console.log(1)
  }
}
let a = new A()
a.log()
