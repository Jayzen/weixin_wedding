import {
    HTTP
}
from '../utils/http'

class AppointmentModel extends HTTP {
    data = null
    createAppointment(name, contact, date, time) {
        return this.request({
            method: 'POST',
            url: 'appointment',
            data: {
                name: name,
                contact: contact,
                date: date,
                time: time
            }
        })
    }

    getAppointments() {
        return this.request({
            url: 'appointments',
        })
    }
}

export {
    AppointmentModel
}