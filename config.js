// 接口的域名
const domain = 'http:'
let config = {
  // 接口列表
  api: {
    films: `${domain}//op.juhe.cn/onebox/movie/video`,   // 影视
    constellation: `${domain}//web.juhe.cn:8080/constellation/getAll`, // 星座
    jokeDaquan: `${domain}//v.juhe.cn/joke/content/list.php`, // 笑话
    onlineMovie: `${domain}//v.juhe.cn/wepiao/query`, // 电影查询
    music: `${domain}//route.showapi.com/213-1`, // 音乐
    worth: `${domain}//v.juhe.cn/jingzhi/query.php`, // 净值数据
    gold: `${domain}//web.juhe.cn:8080/finance/gold/shgold`, // 黄金数据
    books: `${domain}//apis.juhe.cn/goodbook/catalog` // 图书电商数据
  },
  // 获取接口的方法
  getAPI(key) {
    let url
    if (config && config.api) {
      url = config.api[key]
    }
    return url
  }
}
module.exports = config