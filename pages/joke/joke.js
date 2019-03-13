// pages/joke/joke.js
const testApi = require('jokeApi.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokeDaqo: [],
    pages: 1,
    current: 0
  },
  testCommon() {
    let that = this
    let pages = that.data.pages
    testApi.testJokeDaquan(pages, function (res) {
      that.data.jokeDaqo = that.data.jokeDaqo.concat(res)
      console.log(that.data.jokeDaqo)
      that.setData({
        jokeDaqo: that.data.jokeDaqo
      })
    })
  },
  changeCurrent: function (e) {
    this.setData({
      current: e.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.testCommon()
    this.setData({
      current: options.current
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
    this.setData({
      pages: ++this.data.pages
    })
    this.testCommon()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})