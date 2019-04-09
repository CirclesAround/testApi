// pages/canvas/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ctx: null,
    imgSrc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let that = this;
    let ctx = this.data.ctx;
    ctx = wx.createCanvasContext('firstCanvas');
    ctx.drawImage('../../image/img.jpg', 0, 0, 300, 500);
    this.roundRect(ctx, 10, 15, 280, 80, 10);


    // 文字
    let time = '22:22';
    let text = '如果有一天一次就好';
    let str = '踏上时间的列车往回忆边缘开穿过日升月落开往春去冬来我愿翻山越岭这一路风雨只为遇见你或许不完美却值得珍惜让故事继续';
    let day = '0';
    let data = '2019年04月08日';
    that.drawText(ctx, time, 85, 50, 50, 100, '#000', 22, true);
    that.drawText(ctx, text, 85, 75, 50, 260, '#000', 10, false);
    that.drawText(ctx, str, 20, 420, 50, 190, '#fff', 12, false); // 调用行文本换行函数
    that.drawText(ctx, '坚持早起', 165, 36, 50, 50, '#fff', 12, false);
    that.drawText(ctx, day, 220, 38, 50, 100, '#fff', 18, true);
    that.drawText(ctx, '天', 260, 36, 50, 20, '#fff', 12, false);
    that.drawText(ctx, data, 185, 55, 50, 120, '#fff', 10, false);


    // 绘制头像
    ctx.save();
    ctx.beginPath();
    ctx.arc(50, 55, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
    ctx.stroke();
    ctx.clip();
    ctx.drawImage('../../image/1.png', 20, 25, 60, 60);
    // 恢复画布
    ctx.restore();

    // 坚持早起矩形背景
    ctx.save();
    ctx.beginPath();
    ctx.rect(160, 20, 120, 40);
    ctx.fillStyle = 'rgba(0, 0, 0, .2)';
    ctx.fill();

    // 左下角的图片
    ctx.drawImage('../../image/2.png', 6, 300, 140, 140);

    // 右下角的二维码
    ctx.drawImage('../../image/1.png', 230, 420, 60, 60);

    // canvas转化为图片
    ctx.draw(false, function() {
      // console.log(wx.getSystemInfoSync())
      wx.canvasToTempFilePath({
        // x: 0,
        // y: 0,
        // width: 300,
        // height: 500,
        // destWidth: 300 * wx.getSystemInfoSync().pixelRatio,
        // destHeight: 500 * wx.getSystemInfoSync().pixelRatio,
        canvasId: 'firstCanvas',
        quality: 1,
        success(res) {
          that.setData({
            imgSrc: res.tempFilePath
          })
        }
      })
    })

  },
  /**
   * 绘制原型矩形
   * @param ctx canvas对象
   * @param x 距离左边的距离
   * @param y 距离顶部的距离
   * @param w 矩形宽度
   * @param h 矩形高度
   * @param r 圆角
   */
  roundRect: function(ctx, x, y, w, h, r) {
    ctx.save();
    if (w < 2 * r) {
      r = w / 2;
    }
    if (h < 2 * r) {
      r = h / 2;
    }
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, .5)';
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.fill();
    ctx.closePath();
  },
  /**
   * 绘制多行文本
   * @param ctx canvas对象
   * @param str 文本
   * @param leftWidth 距离左侧的距离
   * @param initHeight 距离顶部的距离
   * @param titleHeight 文本的高度
   * @param canvasWidth 文本的宽度
   * @param fillStyle 字体颜色
   * @param setFontSize 文本大小
   * @param bold 是否加粗
   * @returns {*}
   */
  drawText: function (ctx, str, leftWidth, initHeight, titleHeight, canvasWidth, fillStyle, setFontSize, bold) {
    if (bold) {
      ctx.font = 'normal bold 20px sans-serif';
    } else {
      ctx.font = 'normal normal 12px sans-serif';
    }
    ctx.fillStyle = fillStyle;
    ctx.setFontSize(setFontSize);

    let lineWidth = 0;
    let lastSubStrIndex = 0; //每次开始截取的字符串的索引
    for (let i = 0; i < str.length; i++) {
      lineWidth += ctx.measureText(str[i]).width;
      if (lineWidth > canvasWidth) {
        ctx.fillText(str.substring(lastSubStrIndex, i), leftWidth, initHeight); //绘制截取部分
        initHeight += 22; //22为 文字大小20 + 2
        lineWidth = 0;
        lastSubStrIndex = i;
        titleHeight += 22;
      }
      if (i == str.length - 1) { //绘制剩余部分
        ctx.fillText(str.substring(lastSubStrIndex, i + 1), leftWidth, initHeight);
      }
    }
    // 标题border-bottom 线距顶部距离
    titleHeight = titleHeight + 10;
    return titleHeight;
  },
  save: function() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imgSrc,
      success(res) {
        wx.showToast({
          title: '图片保存成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
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