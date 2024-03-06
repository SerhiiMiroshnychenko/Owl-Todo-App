/** @odoo-module */

import { registry } from "@web/core/registry"
import { listView } from "@web/views/list/list_view"
import { ListController } from "@web/views/list/list_controller"
import { useService } from "@web/core/utils/hooks"

class FishListController extends ListController {
    setup(){
        super.setup()
        console.log("This is Fish List controller")
        this.action = useService("action")
    }

    selectOnSale(model){
        console.log(model)
        this.env.searchModel.setDomainParts({
            model: {
                domain: [['is_in_stock', '=', true]],
                facetLabel: "On Sale"
            }
        })
    }

    selectNoSale(model){
        this.env.searchModel.setDomainParts({
            model: {
                domain: [['is_in_stock', '=', false]],
                facetLabel: "No Sale"
            }
        })
    }

    selectAll(model){
        console.log(model)
        console.log(this)
        this.env.searchModel.setDomainParts({
            model: {
                domain: [],
                facetLabel: "All",
            }
        })
    }

}

export const fishListView = {
    ...listView, // Копіюємо всі об'єкти з listView
    Controller: FishListController, // Заміна контролера з ListController на нову версію (FishListController)
    buttonTemplate: "owl.FishListView.Buttons", // Заміна шаблону кнопок з "web.ListView.Buttons" на нову версію "owl.FishListView.Buttons"
}

registry.category("views").add("fish_list_view", fishListView)
