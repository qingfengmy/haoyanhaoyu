// pages/gankhistory/gankhistory.js
import { getGankHistory } from '../../network/api.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'all',
    pageNo: 1,
    loadmore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '全部干货'
    });
    wx.showLoading({
      title: '加载中',
    });
    this.queryHistory();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({ loadmore: true });
    this.queryHistory();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  queryHistory() {
    getGankHistory({ type: this.data.type, pageNo: this.data.pageNO }).then(res => {
      wx.hideLoading();
      let historyList = res.results;
      if (this.data.loadmore) {
        historyList = [...this.data.historyList, ...historyList];
      }
      this.setData({ historyList, pageNo: this.data.pageNo + 1, loadmore: false });
    }).catch(err => {
      this.setData({loadmore:false});
      wx.hideLoading();
      wx.showToast({
        title: '出错了',
      })
    })
  }
})