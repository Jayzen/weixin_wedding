// components/position/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    location:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**cc
   * 组件的方法列表
   */
  methods: {
    redirectAddress: function (event) {
      wx.openLocation({
        latitude: parseFloat(this.properties.location.latitude),
        longitude: parseFloat(this.properties.location.longitude),
        name: this.properties.location.name,
        address: this.properties.location.address
      })
    }
  }
})
