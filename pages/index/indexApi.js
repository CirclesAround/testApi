import damain from '../../config.js'
export function test(f) {
  wx.request({
    url: damain.getAPI('films'),
    method: 'GET',
    header: { 'content-type': 'application/json' },
    data: {
      key: '08f9183c039719ee6622a9b58daccab2',
      q: '绿皮书'
    },
    success: res => {
      typeof f === 'function' && f(res.data.result);
    },
    fail: () => {
      console.log('请求失败')
    }
  })
}
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
export function testJokeDaquan(pages, joke) {
  let timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  console.log(pages)
  wx.request({
    url: damain.getAPI('jokeDaquan'),
    method: 'GET',
    header: { 'content-type': 'application/json' },
    data: {
      key: 'f4e522e24eb4c9838cde782a5926116d',
      sort: 'desc',
      page: pages,
      pagesize: 20,
      time: timestamp
    },
    success: res => {
      // let jokenPrams = res.data.result.data
      typeof joke === 'function' && joke(res.data.result.data) 
    },
    fail: fail => {
      console.log(fail)
    }
  })
}