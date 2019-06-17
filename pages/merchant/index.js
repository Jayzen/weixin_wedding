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

    onShareAppMessage: function () {
    }
})