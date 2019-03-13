import damain from '../../config.js'
export function testConstellation(pass) {
  wx.request({
    url: damain.getAPI('constellation'),
    method: 'GET',
    header: { 'content-type': 'application/json' },
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