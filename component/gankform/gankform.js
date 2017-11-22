// component/gankform/gankform.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    array: ['福利', 'Android', 'Ios', '前端', '瞎推荐', '休闲视频'],
    index: -1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    formSubmit(e) {
      const query = e.detail.value;
      console.log('submit', query);
    },
    formReset(e) {
      const query = e.detail.value;
      console.log('reset', query);
    },
    bindPickerChange(e) {
      this.setData({
        index: e.detail.value
      });
    }
  }
})
