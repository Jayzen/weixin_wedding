import {
    HTTP
}
    from '../utils/http'

class TopModel extends HTTP {
    data = null
    getTop() {
        return this.request({
            url: 'top'
        })
    }
}

export {
    TopModel
}