import {
    ConsultModel
} from '../../models/consult'
import {
    TemplatetModel
} from '../../models/template'

const templateModel = new TemplatetModel()
const consultModel = new ConsultModel()


Component({
    properties: {},

    data: {
        name: '',
        contact: ''
    },

    methods: {
        formSubmit: function (e) {
            consultModel.createConsult(e.detail.value.name, e.detail.value.contact)
                .then(res => {
                    wx.showToast({
                        title: '提交成功',
                        icon: "none"
                    })
                    templateModel.createTemplate(e.detail.formId, e.detail.value.name, e.detail.value.contact) 
                    this.setData({
                        name: '',
                        contact: ''
                    })
                }).
                catch(res => {
                    console.log(res);
                })
        },
    }
})
