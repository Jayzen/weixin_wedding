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
        contact: '',
        content: ''
    },

    methods: {
        formSubmit: function(e) {
            consultModel.createConsult(e.detail.value.name, e.detail.value.contact, e.detail.value.content)
                .then(res => {
                    wx.showToast({
                        title: '提交成功',
                        icon: "none"
                    })
                    templateModel.createTemplate(e.detail.formId, e.detail.value.name, e.detail.value.contact, e.detail.value.content)
                    console.log(e.detail.value.content)
                    this.setData({
                        name: '',
                        contact: '',
                        content: ''
                    })
                }).
            catch(res => {
                console.log(res);
            })
        },
    }
})