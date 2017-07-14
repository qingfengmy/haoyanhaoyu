import marquee from '../component/marquee/marquee.js';

//index.js
//获取应用实例
var app = getApp()
var options = Object.assign(marquee, {
  data: {
    motto: 'Hello World',
    userInfo: {},
    marquee: { text: '你好，中国！hello,world!' }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    const str = this.data.marquee.text;
    const width = this.getWidth(str);
    console.log('width',width);
    this.setData({ [`${'marquee'}.width`]: width });
  }
});
Page(options);
