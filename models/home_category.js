import {
    HTTP
}
    from '../utils/http'

class HomeCategoryModel extends HTTP {
    data = null
    getHomeCategories() {
        return this.request({
            url: 'home_photograph_categories'
        })
    }
}

export {
    HomeCategoryModel
}