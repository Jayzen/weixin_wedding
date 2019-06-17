import {
    ConsultModel
} from '../../models/consult'

const consultModel = new ConsultModel()


Page({
    data: {
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function(callback) {
        consultModel.getConsults()
            .then(res => {
                this.setData({
                    consults: res
                })
                callback && callback();
            }).
        catch(res => {
            console.log(res);
        })
    },

    makePhone: function (event) {
        wx.makePhoneCall({
            phoneNumber: event.currentTarget.dataset.contact
        })
    },

    onPullDownRefresh: function () {
        this._loadData(() => {
            wx.stopPullDownRefresh()
        });
    },

    onShareAppMessage: function() {
    }
})