// pages/exchange/index.js
const dataApi = require('indexApi.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['净值数据', '图书电商数据', '黄金数据'],
    currentTab: 0,
    bookList: [], // 图书电商
    golbList: [], // 黄金数据
    worthList: [], // 净值数据
    noData: false
  },
  change: function(e) {
    if (this.data.currentTab == e.currentTarget.dataset.index) {
      return false
    } else {
      this.setData({
        currentTab: e.currentTarget.dataset.index
      })
      switch (this.data.currentTab) {
        case 0:
          this.worthData()
          break
        case 1:
          this.bookData()
          break
        case 2:
          this.goldData()
          break
        default:
          break
      }
    }

  },
  worthData() {
    let that = this
    if (that.data.noData === false) {
      dataApi.worth(function(res) {
        if (res.result.length === 0) {
          that.setData({
            noData: true
          })
        } else {
          console.log(res.result)
          that.setData({
            worthList: res.result
          })
        }
      })
    } else {
      return false
    }
  },
  bookData() {
    let that = this
    if (that.data.bookList.length === 0) {
      dataApi.books(function(res) {
        console.log(res)
        that.setData({
          bookList: res
        })
      })
    } else {
      return false
    }

  },
  goldData() {
    let that = this
    if (that.data.golbList.length === 0) {
      dataApi.gold(function(res) {
        console.log(res.result[0])
        that.setData({
          golbList: res.result[0]
        })
      })
    } else {
      return false;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.worthData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})