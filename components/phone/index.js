// components/phone/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    phone: {
      type: String
    },
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
    makePhone: function(event) {
      wx.makePhoneCall({
          phoneNumber: this.properties.phone
      })
  },
  }
})
