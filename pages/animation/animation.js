// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['示弱', '不变'],
    current: 0,
    animationData: {},
    animation: {},
    hidden: true,
    list: [{
        title: '花开那年',
        stick: 0,
        nickName: '复杂人生',
        time: '2019-04-16',
        read: '22人已读'
      }, {
        title: '旅程',
        stick: 0,
        nickName: '远intro',
        time: '2019-04-16',
        read: '2人已读'
      }, {
        title: '可惜没有如果',
        stick: 0,
        nickName: 'JJ',
        time: '2019-04-16',
        read: '222人已读'
      },
      {
        title: '藤蔓之间',
        stick: 0,
        nickName: 'vision',
        time: '2019-04-16',
        read: '2人已读'
      }, {
        title: '复杂人生',
        stick: 0,
        nickName: '威斯贝斯',
        time: '2019-04-16',
        read: '22人已读'
      }, {
        title: '八佰',
        stick: 0,
        nickName: '电影',
        time: '2019-04-16',
        read: '222人已读'
      }
    ],
    testIndex: 0,
    testText: {}
  },
  stick: function(e) {
    let test = this.data.list
    let arr = []
    let index = e.currentTarget.dataset.index
    if (test[index].stick === 1) {
      test[index].stick = 0
      test.splice(test[index], 1)
      console.log(this.data.testText)
      
    } else {
      this.data.testIndex = index
      this.data.testText = test[this.data.testIndex]
      test[index].stick = 1
      test.unshift(test.splice(index, 1)[0])
      
      console.log(this.data.testText)
    }

    this.setData({
      list: test
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  // 页面切换动画
  change: function(e) {
    if (this.data.current === e.currentTarget.dataset.index) {
      return false
    } else {
      this.setData({
        current: e.currentTarget.dataset.index
      })
    }

    if (this.data.hidden && e.currentTarget.dataset.index === 1) {
      setTimeout(function() {
        this.animationData.translateX(0).step({
          timingFunction: 'ease-in'
        })
        this.animation.translateX('100vw').step({
          timingFunction: 'ease-in'
        })
        this.setData({
          animationData: this.animationData.export(),
          animation: this.animation.export(),
          hidden: false
        })
      }.bind(this), 100)
    } else {
      setTimeout(function() {
        this.animationData.translateX('100vw').step({
          timingFunction: 'ease-in'
        })
        this.animation.translateX(0).step({
          timingFunction: 'ease-in'
        })
        this.setData({
          animationData: this.animationData.export(),
          animation: this.animation.export(),
          hidden: true
        })
      }.bind(this), 100)
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.animationData = wx.createAnimation();
    this.animation = wx.createAnimation();
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