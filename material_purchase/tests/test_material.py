from odoo.tests.common import TransactionCase
from odoo.exceptions import ValidationError
from odoo.tests import tagged


@tagged('post_install', '-at_install')
class TestMaterial(TransactionCase):

    def setUp(self):
        super(TestMaterial, self).setUp()
        self.supplier = self.env['x_supplyer.purchase'].create({
            'name': 'Test Supplier',
        })
        self.material = self.env['x_material.purchase'].create({
            'code': 'M001',
            'name': 'Test Material',
            'type': 'fabric',
            'buy_price': 150,
            'supplier_id': self.supplier.id
        })

    def test_create_material(self):
        material = self.env['x_material.purchase'].create({
            'code': 'M002',
            'name': 'New Material',
            'type': 'jeans',
            'buy_price': 200,
            'supplier_id': self.supplier.id
        })
        self.assertEqual(material.name, 'New Material')

    def test_material_buy_price_validation(self):
        with self.assertRaises(ValidationError):
            self.material.write({'buy_price': 50})

    def test_update_material(self):
        self.material.write({'name': 'Updated Material'})
        self.assertEqual(self.material.name, 'Updated Material')

    def test_delete_material(self):
        material_id = self.material.id
        self.material.unlink()
        material = self.env['x_material.purchase'].search([('id', '=', material_id)])
        self.assertFalse(material)
