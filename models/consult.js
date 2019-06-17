import {
    HTTP
}
from '../utils/http'

class ConsultModel extends HTTP {
    data = null
    createConsult(name, contact, content) {
        return this.request({
            method: 'POST',
            url: 'consult',
            data: {
                name: name,
                contact: contact,
                content: content   
            }
        })
    }

    getConsults() {
        return this.request({
            url: 'consults',
        })
    }
}

export {
    ConsultModel
}