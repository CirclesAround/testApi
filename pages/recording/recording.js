// pages/recording/recording.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recorderManager: null, // 录音
    state: true, // 开始录音
    continue: false, // 继续录音
    recordingSrc: null, // 存储录音的地址
    innerAudioContext: null // 播放录音
  },
  recordingStart: function() {
    if (this.data.state) {
      const options = {
        duration: 10000
      }
      this.data.recorderManager.start(options)
      this.setData({
        state: false
      })
    } else {
      this.data.recorderManager.stop()
      console.log('停止')
      this.setData({
        state: true
      })
    }
  },
  recordingContinue: function () {
    if (!this.data.continue) {
      this.data.recorderManager.pause()
      this.setData({
        state: false,
        continue: true
      })
    } else {
      this.data.recorderManager.resume()
      this.setData({
        state: true,
        continue: false
      })
    }
  },
  playRecord: function() {
    this.data.innerAudioContext.src = this.data.recordingSrc
    this.data.innerAudioContext.play()
    console.log(this.data.recordingSrc)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.recorderManager = wx.getRecorderManager()
    this.data.recorderManager.onStart(() => {
      console.log('recorder start')
    })
    this.data.recorderManager.onPause(() => {
      console.log('recorder pause')
    })
    this.data.recorderManager.onResume(() => {
      console.log('recorder resume')
    })
    this.data.recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const {
        tempFilePath
      } = res
      this.data.recordingSrc = tempFilePath
    })


    // 播放录音
    this.data.innerAudioContext = wx.createInnerAudioContext()
    this.data.innerAudioContext.autoplay = true
    this.data.innerAudioContext.src = this.data.recordingSrc
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