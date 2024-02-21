/** @odoo-module **/

import { registry } from '@web/core/registry';

const { Component, useState, onWillStart } = owl;
import { useService } from '@web/core/utils/hooks';


export class TodoTask extends Component {
    setup() {
        this.state = useState({
            taskList: []
        })
        this.orm = useService("orm")
        this.model = "todo.task"

        onWillStart(async ()=>{
            await this.getAllTasks()
        })
    }

    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(
            this.model,    // Модель
            [],    // Domain
            ["name", "color", "completed"] // Поля
        )
    }

}

TodoTask.template = 'owl.TodoTask'
registry.category('actions').add('todo_odoo.action_todo_task_js', TodoTask);