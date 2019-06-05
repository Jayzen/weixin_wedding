import {
    CarouselModel
} from '../../models/carousel'
import {
    PhotographModel
} from '../../models/photograph'
import {
    BasicModel
} from '../../models/basic'

const carouselModel = new CarouselModel()
const photographModel = new PhotographModel()
const basicModel = new BasicModel()

Page({
    data: {
        carousels: null,
        photographs: null,
        basic: null,
        loadingCenter: true
    },

    onLoad: function () {
        carouselModel.getCarousels()
            .then(res => {
                this.setData({
                    carousels: res
                })
                return photographModel.getPhotographs()
            })
            .then(res => {
                this.setData({
                    photographs: res
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
  
    onShareAppMessage: function () {
    }
})
