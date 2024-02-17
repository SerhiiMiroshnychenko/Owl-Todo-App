import { registry } from '@web/core/registry';

const { Component, useState } = owl;


export class TodoTask extends Component {
    setup() {
        this.state = useState({value: 1})
    }

}

TodoTask.template
registry.category('actions').add('todo_odoo.action_todo_task_js', DiscussContainer);