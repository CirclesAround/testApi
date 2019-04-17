// pages/test-navbar/index.js
Page({
  data: {
    switchtab: [{
        name: '未使用',
        _type: 'notUsed'
      }, {
        name: '已使用',
        _type: 'alreadyUsed'
      },
      {
        name: '已过期',
        _type: 'expired'
      }
    ],
    currentTab: 0,
    coupons: []
  },
  onLoad: function(options) {
    this.setData({
      coupons: this.loadCoupons()
    });
  },
  //tab切换函数，让swiper当前滑块的current的index与tab头部index一一对应
  switchNav: function(e) {
    var index = e.target.dataset.current;
    if (this.data.currentTab == index) {
      return false;
    } else {
      this.setData({
        currentTab: index
      });
    }
  },
  //滑动swiper切换，让swiper当前滑块的current的index与tab头部index一一对应
  tabChange(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  //自定义数据函数
  loadCoupons: function() {
    let switchtab = this.data.switchtab,
      coupons = [{
        id: "1",
        price: "200",
        condition: "无门槛",
        goods: "新用户 20元优惠券；",
        way: "限无人机、数码、潮玩",
        date: "2017.3.22-2017.12.22",
        _type: "notUsed"
      }, {
        id: "1",
        price: "200",
        condition: "无门槛",
        goods: "新用户 20元优惠券；",
        way: "限无人机、数码、潮玩",
        date: "2017.3.22-2017.12.22",
        _type: "notUsed",
      }, {
        id: "1",
        price: "200",
        condition: "无门槛",
        goods: "新用户 20元优惠券",
        way: "限无人机、数码、潮玩；",
        date: "2017.3.22-2017.12.22",
        _type: "notUsed",
      }, {
        id: "1",
        price: "200",
        condition: "无门槛",
        goods: "新用户 20元优惠券",
        way: "限无人机、数码、潮玩；",
        date: "2017.3.22-2017.12.22",
        _type: "notUsed"
      }, {
        id: "1",
        price: "200",
        condition: "无门槛",
        goods: "新用户 20元优惠券",
        way: "限无人机、数码、潮玩；",
        date: "2017.3.22-2017.12.22",
        _type: "notUsed"
      }, {
        id: "2",
        price: "200",
        condition: "无门槛",
        goods: "新用户 20元优惠券",
        way: "限无人机、数码、潮玩；",
        date: "2017.3.22-2017.12.22",
        _type: "alreadyUsed"
      }, {
        id: "2",
        price: "100",
        condition: "满500可用",
        goods: "仅可购买网络品类指定商品",
        way: "全平台",
        date: "2017.3.22-2017.12.22",
        _type: "alreadyUsed",
      }, {
        id: "2",
        price: "100",
        condition: "满500可用",
        goods: "仅可购买网络品类指定商品",
        way: "全平台",
        date: "2017.3.22-2017.12.22",
        _type: "alreadyUsed",
      }, {
        id: "3",
        price: "200",
        condition: "满200可用",
        goods: "仅可购买网络品类指定商品",
        way: "全平台",
        date: "2017.3.22-2017.12.22",
        _type: "expired"
      }];


    //这里是根据tab头部的数据来重建一个数组，使数组的内容与tab一一对应
    var result = new Array();
    for (var n = 0; n < switchtab.length; n++) {
      let minArr = []
      for (var i = 0; i < coupons.length; i++) {
        //根据类型来区分自定义的内容属于哪个tab下面的
        if (coupons[i]._type == switchtab[n]._type) {
          minArr.push(coupons[i]);
        }
      }
      result.push(minArr)
    }
    return result;
  },
  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  }
})