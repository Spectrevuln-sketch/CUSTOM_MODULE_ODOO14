from odoo import models, fields

class SupplyerPurchase(models.Model):
    _name = 'x_supplyer.purchase'
    _description = 'Supplyer Purchase'

    name = fields.Char(string='Supplyer Name', required=True)
    supplier_material_ids = fields.One2many('x_material.purchase', 'supplier_id', string='Materials')
