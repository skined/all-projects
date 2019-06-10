// pages/video/video.js
import {fetchdata} from '../../utils/data.js'
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     carlist:[],
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let searchurl = 'https://www.easy-mock.com/mock/5cf5b7c0c219f320dfa9cc9e/easy/easy';
    fetchdata(searchurl).then(res => {
      this.setData({
        carlist: res.video,
        
      })
      console.log(res.video)
     
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})