from odoo import http
from odoo.http import request

class MaterialController(http.Controller):

    @http.route(['/materials'], type='http', auth='public', website=True)
    def list_materials(self, **kwargs):
        materials = request.env['material'].search([])
        return request.render('module_name.material_list', {
            'materials': materials
        })

    @http.route(['/materials/<model("material"):material>/'], type='http', auth='public', website=True)
    def material_details(self, material, **kwargs):
        return request.render('module_name.material_details', {
            'material': material
        })

    @http.route(['/materials/create'], type='http', auth='public', website=True, methods=['POST'])
    def create_material(self, **kwargs):
        values = {
            'material_code': kwargs.get('material_code'),
            'material_name': kwargs.get('material_name'),
            'material_type': kwargs.get('material_type'),
            'material_buy_price': kwargs.get('material_buy_price'),
            'supplier_id': kwargs.get('supplier_id')
        }
        material = request.env['material'].create(values)
        return request.redirect('/materials')

    @http.route(['/materials/update/<model("material"):material>/'], type='http', auth='public', website=True, methods=['POST'])
    def update_material(self, material, **kwargs):
        material.write({
            'material_code': kwargs.get('material_code'),
            'material_name': kwargs.get('material_name'),
            'material_type': kwargs.get('material_type'),
            'material_buy_price': kwargs.get('material_buy_price'),
            'supplier_id': kwargs.get('supplier_id')
        })
        return request.redirect(f'/materials/{material.id}')

    @http.route(['/materials/delete/<model("material"):material>/'], type='http', auth='public', website=True, methods=['POST'])
    def delete_material(self, material, **kwargs):
        material.unlink()
        return request.redirect('/materials')
