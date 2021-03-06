///index.js
//获取应用实例
import {
  API_BASE
} from '../../config/api'
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/1.JPG',
      '../../images/b.JPG'
    ],
    showLeft: false,
    showRight: false,
    canshow: true,
    move: true,
    hide: false,
    current: 1,
    currentPage: 1,
    totalPages: 1,
    total: 0,
    light: 2,
    index: 1,
    num: 1,
    agenda: {
    },
    date: [],
    result: [{
      id: 'd22',
      leftteam: "../../images/4.png",
      leftgrade: 102,
      leftname: '马刺',
      rightteam: "../../images/5.png",
      rightgrade: 111,
      rightname: '骑士',
    },
    {
      id: 'd23',
      leftteam: "../../images/10.png",
      leftgrade: 95,
      leftname: '火箭',
      rightteam: "../../images/9.png",
      rightgrade: 92,
      rightname: '勇士',
    },
    {
      id: 'd24',
      leftteam: "../../images/5.png",
      leftgrade: 83,
      leftname: '骑士',
      rightteam: "../../images/4.png",
      rightgrade: 96,
      rightname: '马刺',
    },
    {
      id: 'd25',
      leftteam: "../../images/9.png",
      leftgrade: 94,
      leftname: '勇士',
      rightteam: "../../images/10.png",
      rightgrade: 98,
      rightname: '火箭',
    }],
    news: [],
  },
  onPullDownRefresh() {
    // console.log('下拉了');
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: API_BASE,
      success: (res) => {
        this.setData({
          news: res.data.data.new,
          currentPage: 1,
          hide: false
        })
        wx.hideLoading();
        wx.stopPullDownRefresh()
      }
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: API_BASE,
      success: (res) => {
        this.setData({
          date: res.data.data.date,
          news: res.data.data.new,
          currentPage: 1,
          totalPages: res.data.data.totalPages,
          total: res.data.data.total
        })
      }
    })
    this.init();
    wx.hideLoading();
  },
  init: function () {
    let leftgrade = this.data.result[this.data.index].leftgrade;
    let rightgrade = this.data.result[this.data.index].rightgrade;
    let grade = leftgrade > rightgrade ? '1' : '2';
    this.setData({
      agenda: this.data.result[this.data.index],
      index: this.data.index,
      light: grade,
    })
  },
  onReachBottom() {
    let { currentPage, totalPages } = this.data
    if (currentPage >= totalPages) {
      this.setData({
        hide: true,
      })
      return;
    }
    wx.showLoading({
      title: '玩命加载中',
    })
    currentPage += 1;
    wx.request({
      url: API_BASE,
      success: (res) => {
        const news = [
          ...this.data.news,
          ...res.data.data.new,
        ];
        this.setData({
          news,
          currentPage
        })
        wx.hideLoading();
      }
    })
  },
  changeleft: function () {
    const index = this.data.index - this.data.num;
    this.setData({
      agenda: this.data.result[index],
      light: this.data.result[index].leftgrade > this.data.result[index].rightgrade ? '1' : '2',
      index: index,
      current: index,
      showLeft: true,
    })
  },
  changeright: function () {
    const index = this.data.index + this.data.num;
    this.setData({
      agenda: this.data.result[index],
      index: index,
      current: index,
      light: this.data.result[index].leftgrade > this.data.result[index].rightgrade ? '1' : '2',
      showRight: true,
    })
  },
  turnleft: function (e) {
    const index = this.data.index - this.data.num;
    if (index <= -1) {
      return;
    } else if (index == 0) {
      this.changeleft();
    } else {
      this.changeleft();
      this.setData({
        showLeft: false,
        showRight: false,
      })
    }
  },
  turnright: function (e) {
    const index = this.data.index + this.data.num;
    if (index >= this.data.date.length) {
      return;
    } else if (index == this.data.date.length - 1) {
      this.changeright();
    }
    else {
      this.changeright();
      this.setData({
        showRight: false,
        showLeft: false,
      })
    }
  },
  swiperchange: function (e) {
    const current = e.detail.current;
    const ind = this.data.index;
    const dex = current - ind;
    if (current - ind > 0) {
      this.setData({
        num: dex
      })
      this.turnright()
      this.setData({
        num: 1
      })
    } else if (current - ind < 0) {
      this.setData({
        num: -dex
      })
      this.turnleft()
      this.setData({
        num: 1
      })
    }

    console.log(current);
  },
  onShareAppMessage() {
    return {
      path: `/pages/index/index`,
      success: function (res) {
      },
      fail: function (res) {
      }
    }
  },
})