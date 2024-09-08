{
  "name": "Module Material Purchase",
  "version": "14.0.1.0.0",
  "category": "purchase",
  "summary": "Material Purchase Module",
  "description": """
    Material Purchase Module Test
  """,
  "website": "",
  "author":"Gerry Raditya",
  "depends": ["web", "base"],
  'data': [
        'views/material_purchase_view.xml',
        'security/ir.model.access.csv',
  ],
  "tests": [
        'tests/test_material.py'
    ],
  "installable": True,
  # "application": True,
  "license": "OEEL-1"
}
