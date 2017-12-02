// pages/ganktype/ganktype.js
import { getGankRandom } from '../../network/api.js';
import { formatTime } from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadmore: false,
    randomList: [],
    types: [{ name: 'Android' }, { name: 'IOS' }, { name: '前端' }, { name: 'App' }, { name: '休息视频' }, { name: '拓展资源' }, { name: '瞎推荐' }, { name: '福利' },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.setNavigationBarTitle({
      title: '发现',
    })
    getGankRandom().then(res => {
      wx.hideLoading();
      const randomList = res.results.map(item => {
        item.publishedAt = formatTime(new Date(item.publishedAt));
        return item;
      });
      this.setData({ randomList });
    }).catch(err=>{
      wx.hideLoading();
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom---');
    this.setData({ loadmore: true });
    getGankRandom().then(res => {
      const randomList = res.results.map(item => {
        item.publishedAt = formatTime(new Date(item.publishedAt));
        return item;
      });
      this.setData({ loadmore: false, randomList: [...this.data.randomList, ...randomList] });
    }).catch(err=>{
      wx.hideLoading();
      wx.showToast({
        title: '出错了',
      })
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})