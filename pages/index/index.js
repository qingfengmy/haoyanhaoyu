import { getGankIndex } from '../../network/api.js';
import { getCurrentDate, getYesterday, getCurrentDateFormat } from '../../utils/getDate.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGankIndex(new Date());
  },

  getGankIndex(date) {
    wx.showLoading({
      title: '加载中',
    })
    getGankIndex(getCurrentDate(date)).then(res => {
      console.log('res', res);
      wx.hideLoading();
      wx.stopPullDownRefresh();
      if (res.category && res.category.length > 0) {
        this.setData({ ...res, title: getCurrentDateFormat(date), imgUrl: res.results['福利'][0].url });
      } else {
        this.getGankIndex(getYesterday(date));
      }
    }).catch(err => {
      wx.hideLoading();
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '出错了',
      })
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');
    this.getGankIndex(new Date());
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
