import damain from '../../config.js'
export function test(name, f) {
  wx.request({
    url: damain.getAPI('films'),
    method: 'GET',
    header: { 'content-type': 'application/json' },
    data: {
      key: '08f9183c039719ee6622a9b58daccab2',
      q: name
    },
    success: res => {
      typeof f === 'function' && f(res.data);
    },
    fail: () => {
      console.log('请求失败')
    }
  })
}
export function onlineMovie (online) {
  wx.request({
    url: damain.getAPI('onlineMovie'),
    method: 'GET',
    header: { 'content-type': 'application/json' },
    data: {
      key: '132581abe9d87dd7743abe1ef25c13a8'
    },
    success: res => {
      typeof online === 'function' && online(res.data.result)
    }
  })
}