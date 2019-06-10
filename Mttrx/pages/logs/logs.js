//logs.js
import { fetchdata } from '../../utils/data.js'
const app = getApp()


Page({
  data: {
    logs: []
  },
  onLoad: function () {
    let searchurl = 'https://www.easy-mock.com/mock/5cf5b7c0c219f320dfa9cc9e/easy/easy';
    fetchdata(searchurl).then(res => {
      this.setData({
        logs: res.draw
      })
    
    })
  }
})
