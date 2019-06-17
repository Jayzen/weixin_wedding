import {
    MerchantModel
} from '../../models/merchant'

const merchantModel = new MerchantModel()


Page({
    data: {
    },

    merchantVerify: function (e) {
        merchantModel.merchantVerify()
    },

    onPullDownRefresh: function () {
        wx.stopPullDownRefresh()
    },

    onShareAppMessage: function () {
    }
})