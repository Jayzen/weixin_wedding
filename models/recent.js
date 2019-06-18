import {
    HTTP
}
    from '../utils/http'

class RecentModel extends HTTP {
    data = null
    getRecents() {
        return this.request({
            url: 'recents'
        })
    }
}

export {
    RecentModel
}