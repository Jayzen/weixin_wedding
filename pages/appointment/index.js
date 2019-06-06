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

    onLoad: function (options) {
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
            }).
            catch(res => {
                console.log(res);
            })
    }
})