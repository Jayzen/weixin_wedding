import {
    LocationModel
} from '../../models/location'
import {
    TopModel
} from '../../models/top'

const locationModel = new LocationModel()
const topModel = new TopModel()

Page({
    data: {
        loadingCenter: true
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
                return topModel.getTop()
            })
            .then(res => {
                this.setData({
                    top: res
                })
                callback && callback();
            }).
            catch(res => {
                console.log(res);
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