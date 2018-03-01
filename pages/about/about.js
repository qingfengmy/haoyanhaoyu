// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    defaultAvatar: '/images/icon/user_default.png',
    defaultNickName: '我是谁',
    result:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.getUserInfo({
      lang: 'zh_CN',
      success(res) {
        that.setData({ userInfo: res.userInfo });
      }
    })
  },
  scancode(){
    const that = this;
    wx.scanCode({
      success: (res) => {
        console.log('--res--',res);
        that.setData({ result: JSON.stringify(res) });
      },
      fail: (err) => {
        console.error('--err--', err);
      }
    })
  }
})