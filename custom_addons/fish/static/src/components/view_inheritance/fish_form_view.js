/** @odoo-module */

import { registry } from "@web/core/registry"
import { formView } from "@web/views/form/form_view"
import { FormController } from "@web/views/form/form_controller"
import { useService } from "@web/core/utils/hooks"

class FishFormController extends FormController {
    setup(){
        super.setup()
        console.log("This is Fish form controller")
        this.action = useService("action")
        this.orm = useService("orm")
    }

    async removeFish(model, id){
       console.log(model)
       console.log(id)
       await this.orm.unlink(model, [id])
       await this.action.doAction({
            type: "ir.actions.act_window",
            name: "Fish",
            res_model: "fish.fish",
            views: [[false, "list"], [false, "form"]]
        })
    }

    goWebsitePage(id){
        this.action.doAction({
            type: "ir.actions.act_url",
            target: "new",
            url: `http://localhost:8069/fish/fish-fish-${id}-${id}/`
        })
    }

}

FishFormController.template = "owl.FishFormView"

export const fishFormView = {
    ...formView, // Копіюємо всі об'єкти з formView
    Controller: FishFormController, // Заміна контролера з FormController на нову версію (FishFormController)
}

registry.category("views").add("fish_form_view", fishFormView)
