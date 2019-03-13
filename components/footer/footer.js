let app = getApp()
Component({
  properties: {
    chooseCurrent: {
      type: Number,
      value: 0,
      observer(e) {
        this.chooseActive(e)
      }
    }
  },
  data: {
    // tmpFooter: {},
    footer: [],
    current: 0
  },
  attached() {
    let that = this
    that.setData({
      footer: app.globalData.footer,
      current: app.globalData.current
    })
  },
  methods: {
    changeNavbar: function (e) {
      this.setData({
        currenr: e.currentTarget.dataset.index
      })
      let myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      }
      this.triggerEvent('chooseTest', this.data.current, myEventOption)
    },
    chooseActive: function (e) {
      this.setData({
        current: e
      })
    }
  }
})
