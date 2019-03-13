//index.js
//获取应用实例
const app = getApp()
const testApi = require('indexApi.js')
Page({
  data: {
    movie: {},
    constellation: {},
    jokeDaqo: [],
    pages: 1,
    current: 0
  },
  obtainMovie () {
    let that = this
    testApi.test(function (res) {
      console.log(res);
      that.setData({
        movie: res
      })
    })
  },
  obtainConstellation() {
    let that = this
    testApi.testConstellation(function(res) {
      console.log(res)
      that.setData({
        constellation: res
      })
    })
  },
  obtainJokeDaqo () {
    this.testCommon()
  },
  testCommon () {
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
  onLoad: function (options) {
    this.setData({
      current: options.current
    })
  },
  onReachBottom: function () {
    this.setData({
      pages: ++this.data.pages
    })
    this.testCommon()
  }
})
