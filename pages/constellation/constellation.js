// pages/constellation/constellation.js
const testApi = require('constellationApi.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    constellation: {},
    current: 0,
    keywords: '',
    pages: 1,
    list: []
  },
  changeCurrent: function (e) {
    this.setData({
      current: e.detail
    })
  },
  searchKeywords: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },
  formSubmit: function () {
    let that = this
    let keywords = that.data.keywords
    let pages = that.data.pages
    testApi.testMusic(keywords, pages,function (res) {
      console.log(res)
      that.setData({
        list: res.showapi_res_body.pagebean.contentlist
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    testApi.testConstellation(function (res) {
      console.log(res)
      that.setData({
        constellation: res,
        current: options.current
      })
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