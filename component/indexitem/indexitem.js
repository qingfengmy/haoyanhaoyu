// component/indexitem/indexitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gankType: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        console.log('this.properties.gankType', newVal);
        let icon;
        switch (newVal) {
          case 'Android':
            icon = '/images/icon/ic_android.png';
            break;
          case 'iOS':
            icon = '/images/icon/ic_ios.png';
            break;
          case '休息视频':
            icon = '/images/icon/ic_shipin.png';
            break;
          case '前端':
            icon = '/images/icon/ic_qianduan.png';
            break;
        };
        this.setData({ icon });
      }
    },
    gankList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClickUrl(e) {
      wx.showToast({
        title: '暂未实现',
      })
      // 跳webview页面
      console.log(e);
      // wx.navigateTo({
      //   url: '/pages/webview/webview?url=' + encodeURI(e.currentTarget.dataset.url),
      // })
    }
  }
})
