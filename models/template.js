import {
    HTTP
}
from '../utils/http'

class TemplatetModel extends HTTP {
    data = null
    createTemplate(form_id, name, contact) {
        return this.request({
            method: 'POST',
            url: 'consult_template',
            data: {
                form_id: form_id,
                name: name, 
                contact: contact
            }
        })
    }
    createAppointmentTemplate(form_id, name, contact, date, time) {
        return this.request({
            method: 'POST',
            url: 'appointment_template',
            data: {
                form_id: form_id,
                name: name,
                contact, contact,
                date: date,
                time: time
            }
        })
    }
}

export {
    TemplatetModel
}