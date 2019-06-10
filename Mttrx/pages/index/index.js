//index.js
//获取应用实例
import { fetchdata } from '../../utils/data.js'
const app = getApp()
Page({
  data: {
    list:[],
    imgUrls: [
      "../../images/mt.jpg",
      "../../images/pap.jpg",
      "../../images/pap_2.jpg"
    ],
  },
  //事件处理函数
  
  onLoad: function () {
    let searchurl = 'https://www.easy-mock.com/mock/5cf5b7c0c219f320dfa9cc9e/easy/easy';
    fetchdata(searchurl).then(res => {
      // console.log(res.cosplay)
        this.setData({
          list:res.cosplay
        })
    })
  },
  
})
