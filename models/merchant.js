import {
    config
} from '../utils/config'

class MerchantModel {
    merchantVerify() {
        wx.login({
            success: function(res) {
                wx.request({
                    url: config.api_base_url + 'merchant/verify',
                    method: 'POST',
                    data: {
                        code: res.code
                    },
                    header: {
                        'appkey': config.appkey
                    },
                    success: function(res) {
                        wx.showToast({
                            title: '通知权限开通',
                            icon: "none"
                        })
                    }
                })
            }
        })
    }
}

export {
    MerchantModel
}