import {
    AppointmentModel
} from '../../models/appointment'

const appointmentModel = new AppointmentModel()

Page({
    data: {
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
        appointmentModel.getAppointments()
            .then(res => {
                this.setData({
                    appointments: res
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

    onShareAppMessage: function () {
    }
})