{
    'name': 'ToDo',
    'version': '16.0.1.0.0',
    'summary': 'ToDo Odoo App',
    'description': 'ToDo Odoo Application',
    'sequence': -1,
    'category': 'OWL',
    'author': 'Serhii Miroshnychenko',
    'website': 'https://github.com/SerhiiMiroshnychenko/Owl-Todo-App',
    'license': 'LGPL-3',
    'depends': ['base'],
    'data': ['security/ir.model.access.csv', 'views/todo_task.xml'],
    'demo': [],
    'installable': True,
    'application': True,
    'auto_install': False,
    'assets': {
        'web.assets_backend': [
            'todo_odoo/static/src/components/*/*.js',
            'todo_odoo/static/src/components/*/*.xml',
            'todo_odoo/static/src/components/*/*.scss',
        ],
    }
}
