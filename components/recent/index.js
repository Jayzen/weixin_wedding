Component({
    properties: {
        photographs: {
            type: Array
        }
    },

    data: {},

    methods: {
        onTap(event) {
            console.log(event)
            const bid = event.target.dataset.id
            wx.navigateTo({
                url: `/pages/photograph-detail/index?bid=${bid}`
            })
        }
    }
})