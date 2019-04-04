//index.js
//获取应用实例
const app = getApp()
const testApi = require('indexApi.js')
Page({
  data: {
    current: 0,
    list: [
      {
        url: '../movie/movie',
        text: '影视'
      }, {
        url: '../joke/joke',
        text: '笑话大全'
      }, {
        url: '../constellation/constellation',
        text: '星座'
      }, {
        url: '../index/index',
        text: '我的'
      }, {
        url: '../test-header/test-header',
        text: '自定义导航'
      }
    ]
  },
  changeCurrent: function (e) {
    this.setData({
      current: e.detail
    })
  },
  onLoad: function (options) {
   let that = this
   that.setData({
     current: options.current
   })
  },
  onReachBottom: function () {
    
  }
})
