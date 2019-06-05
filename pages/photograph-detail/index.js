import {
    PhotographModel
} from '../../models/photograph'
import {
    BasicModel
} from '../../models/basic'

const photographModel = new PhotographModel()
const basicModel = new BasicModel()

Page({
    data: {
        photograph: null,
        basic: null,
        loadingCenter: true
    },

    onLoad: function (options) {
        const bid = options.bid
        photographModel.getPhotograph(bid)
            .then(res => {
                this.setData({
                    photograph: res            
                })
                return basicModel.getBasic()
            })
            .then(res => {
                this.setData({
                    basic: res,
                    loadingCenter: false  
                })
            }).
            catch(res => {
                console.log(res);
            })
    },

    makePhone: function (event) {
        wx.makePhoneCall({
            phoneNumber: this.data.basic.phone
        })
    },

    redirectAppointment: function(event){
        wx.switchTab({
            url: '/pages/appointment/index'
        })
    },

    onShareAppMessage: function () {
    }
})
