import damain from '../../config.js'
export function testJokeDaquan(pages, joke) {
  let timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
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