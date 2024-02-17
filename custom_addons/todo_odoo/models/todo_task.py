from odoo import fields, models, api


class TodoTask(models.Model):
    _name = 'todo.task'
    _description = 'Todo Task'

    name = fields.Char(string='Task Name')
    completed = fields.Boolean()
    color = fields.Char()
