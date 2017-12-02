// component/ganktypeitem/ganktypeitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        let icon = '';
        switch (newVal) {
          case 'Android':
            icon = '/images/icon/ic_android.png';
            break;
          case 'IOS':
            icon = '/images/icon/ic_ios.png';
            break;
          case '休息视频':
            icon = '/images/icon/ic_shipin.png';
            break;
          case '福利':
            icon = '/images/icon/ic_fuli.png';
            break;
          case '拓展资源':
            icon = '/images/icon/ic_tzzy.png';
            break;
          case '前端':
            icon = '/images/icon/ic_qianduan.png';
            break;
          case '瞎推荐':
            icon = '/images/icon/ic_xtj.png';
            break;
          case 'App':
            icon = '/images/icon/ic_app.png';
            break;
        }
        this.setData({ icon });
      }
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
    clickItem(e) {
      console.log(e);
      wx.navigateTo({
        url: '/pages/gankhistory/gankhistory?type=' + e.currentTarget.dataset.name,
      });
    }
  }
})
