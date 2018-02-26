// pages/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  }
})