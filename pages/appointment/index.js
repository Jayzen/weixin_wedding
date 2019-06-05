import {
    CarouselModel
} from '../../models/carousel'
import {
    LocationModel
} from '../../models/location'

const carouselModel = new CarouselModel()
const locationModel = new LocationModel()

Page({
    data: {
        loadingCenter: true
    },

    onLoad: function (options) {
        carouselModel.getCarousel()
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    carousel: res
                })
                return locationModel.getLocation()
            })
            .then(res => {
                this.setData({
                    location: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    }
})