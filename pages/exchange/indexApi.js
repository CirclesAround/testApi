import damain from '../../config.js'
export function worth(testWorth) {
  wx.showLoading({
    title: '加载中'
  })
  wx.request({
    url: damain.getAPI('worth'),
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    data: {
      key: '165ad75ce6b32b0cf58c9875caceb113'
    },
    success(res) {
      typeof testWorth === 'function' && testWorth(res.data)
    },
    fail() {
      console.log('error')
    },
    complete(){
      wx.hideLoading()
    }
  })
}
export function books (testBooks) {
  wx.showLoading({
    title: '加载中'
  })
  wx.request({
    url: damain.getAPI('books'),
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    data: {
      key: 'c6fc7574ab6a60244f3b8c4bc5dba9d0',
      dtype: JSON
    },
    success(res) {
      typeof testBooks === 'function' && testBooks(res.data.result)
    },
    fail() {
      console.log('数据请求失败图书')
    },
    complete() {
      wx.hideLoading()
    }
  })
}
export function gold(testGold) {
  wx.showLoading({
    title: '加载中'
  })
  wx.request({
    url: damain.getAPI('gold'),
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    data: {
      key: '812e210bb0b35ca197212919b372e988',
      v: 1
    },
    success(res){
      typeof testGold === 'function' && testGold(res.data)
    },
    fail() {
      console.log('数据请求失败黄金')
    },
    complete() {
      wx.hideLoading()
    }
  })
}