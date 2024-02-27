/** @odoo-module **/

import { registry } from '@web/core/registry';

const { Component, useState, onWillStart, useRef } = owl;
import { useService } from '@web/core/utils/hooks';


export class FishInfo extends Component {
    setup() {
        this.state = useState({
            info:{common_name:"", scientific_name:"", average_size:0, is_in_stock:false, price:0, remarks:""},
            fishInfo: [],
            isEdit: false,
            activeId: false,
        })
        this.orm = useService("orm")
        this.model = "fish.fish"
        this.searchInput = useRef("search-input")

        onWillStart(async ()=>{
            await this.getAllfishes()
        })
    }

    async getAllfishes(){
        this.state.fishInfo = await this.orm.searchRead(
            this.model,    // Модель
            [],    // Domain
            ["common_name", "scientific_name", "average_size", "is_in_stock", "price", "currency_name", "remarks"] // Поля
        )
    }

    addFish(){
        this.resetForm()
        this.state.activeId = false
        this.state.isEdit = false
    }

    editFish(info){
        this.state.activeId = info.id
        this.state.isEdit = true
        this.state.info = {...info}
    }

    async saveFish(){
        if (!this.state.isEdit){
            await this.orm.create(this.model, [this.state.info])
        }else {
            await this.orm.write(this.model, [this.state.activeId], this.state.info)
        }

        await this.getAllfishes()
    }

    resetForm(){
        this.state.info = {common_name:"", scientific_name:"", average_size:0, is_in_stock:false, price:0, remarks:""}
    }

    async deleteFish(info){
       await this.orm.unlink(this.model, [info.id])
       await this.getAllfishes()
    }

    async searchFish(){
        const text = this.searchInput.el.value
        console.log(text)
        this.state.fishInfo = await this.orm.searchRead(
            this.model,    // Модель
            [['common_name', 'ilike', text]],    // Domain
            ["common_name", "scientific_name", "average_size", "is_in_stock", "price", "currency_name", "remarks"] // Поля
        )
    }

    async toggleFish(event, info){
        await this.orm.write(this.model, [info.id], {is_in_stock: event.target.checked})
        await this.getAllfishes()
    }
}

FishInfo.template = 'owl.FishInfo'
registry.category('actions').add('fish.action_fish_js', FishInfo);