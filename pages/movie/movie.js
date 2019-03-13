// pages/movie/movie.js
const testApi = require('movieApi.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    movieName: '',
    url: {},
    current: 0
  },
  changeCurrent: function (e) {
    this.setData({
      current: e.detail
    })
  },
  search: function (e) {
    let that = this
    that.setData({
      movieName: e.detail.value.name
    })
    let name = this.data.movieName
    if (name === '') {
      return false
    } else {
      testApi.test(name, function (res) {
        console.log(res)
        if (res.result === null) {
          wx.showModal({
            title: '搜索结果',
            content: res.reason,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        } else {
          that.setData({
            movie: res.result
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    testApi.onlineMovie(function(res) {
      console.log(res)
      that.setData({
        url: res
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