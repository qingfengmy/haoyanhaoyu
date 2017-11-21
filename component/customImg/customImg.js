// component/img/img.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    imgUrl: {
      type: String,
      value: ''
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
    handleClickImg() {
      console.log('this.data',this.data);
      wx.previewImage({
        current: this.properties.imgUrl, // 当前显示图片的http链接
        urls: [this.properties.imgUrl] // 需要预览的图片http链接列表
      })
    }
  }
})
