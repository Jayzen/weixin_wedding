import {
    CarouselModel
} from '../../models/carousel'
import {
    PhotographModel
} from '../../models/photograph'
import {
    BasicModel
} from '../../models/basic'
import {
    RecentModel
} from '../../models/recent'
import {
    HomeCategoryModel
} from '../../models/home_category'

const carouselModel = new CarouselModel()
const photographModel = new PhotographModel()
const basicModel = new BasicModel()
const recentModel = new RecentModel()
const homeCategoryModel = new HomeCategoryModel()

Page({
    data: {
        carousels: null,
        photographs: null,
        basic: null,
        loadingCenter: true
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
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
                    basic: res
                })
                return recentModel.getRecents()
            })
            .then(res => {
                this.setData({
                    recents: res,
                })
                return homeCategoryModel.getHomeCategories()
            })
            .then(res => {
                this.setData({
                    home_categories: res,
                    loadingCenter: false
                })
                callback && callback();
            })
            .catch(res => {
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
