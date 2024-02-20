/** @odoo-module **/

import { registry } from '@web/core/registry';

const { Component, useState, onWillStart } = owl;
import { useService } from '@web/core/utils/hooks';


export class TodoTask extends Component {
    setup() {
        this.state = useState({
            taskList: [
                {id:1, name:"Task 1", color:"#FF0000", completed: true},
                {id:2, name:"Task 2", color:"#000000", completed: true},
                {id:3, name:"Task 3", color:"#FFFFFF", completed: false},
            ]
        })
        this.orm = useService("orm")
    }

}

TodoTask.template = 'owl.TodoTask'
registry.category('actions').add('todo_odoo.action_todo_task_js', TodoTask);