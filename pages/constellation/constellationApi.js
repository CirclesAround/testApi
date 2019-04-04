import damain from '../../config.js'
export function testConstellation(pass) {
  wx.request({
    url: damain.getAPI('constellation'),
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    data: {
      key: '32a02aafea689e90a93c36d590477fc6',
      consName: '双鱼座',
      type: 'week'
    },
    success: res => {
      typeof pass === 'function' && pass(res.data);
    },
    fail: () => {
      console.log('请求失败')
    }
  })
}
export function testMusic(keyword, pages,music) {
  wx.request({
    url: damain.getAPI('music'),
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    data: {
      showapi_appid: 89344,
      showapi_sign: 'd11c9e373cb04ebfba3cb98e8787485a',
      keyword: keyword,
      page: pages
    },
    success: res => {
      typeof music === 'function' && music(res.data);
    },
    fail: () => {
      console.log('请求失败')
    }
  })
}