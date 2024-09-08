from odoo import models, fields, api
from odoo.exceptions import ValidationError

class MaterialPurchase(models.Model):
    _name = 'x_material.purchase'
    _description = 'Material Purchase'

    code = fields.Char(string='Material Code', required=True)
    name = fields.Char(string='Material Name', required=True)
    type = fields.Selection([
        ('fabric', 'Fabric'),
        ('jeans', 'Jeans'),
        ('cotton', 'Cotton')
    ], string='Material Type', required=True)
    buy_price = fields.Float(string='Material Buy Price', required=True, default=100)
    supplier_id = fields.Many2one('x_supplyer.purchase', string='Supplier', required=True)

    @api.constrains('buy_price')
    def _check_material_buy_price(self):
        for record in self:
            if record.buy_price < 100:
                raise ValidationError("Material Buy Price cannot be less than 100.")
