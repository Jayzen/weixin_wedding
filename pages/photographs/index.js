import {
    PhotographModel
} from '../../models/photograph'

const photographModel = new PhotographModel()

Page({
    data: {
        loadingCenter: true
    },
    
    onLoad: function () {
        this._loadData();
    },

    _loadData: function (callback) {
        photographModel.getPhotographs()
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    photographs: res
                })
                callback && callback();
            }).
            catch(res => {
                console.log(res);
            })
    },

    onTap(event) {
        const bid = event.target.dataset.id
        wx.navigateTo({
            url: `/pages/photograph-detail/index?bid=${bid}`
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