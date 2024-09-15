{
    'name': 'POS inharitance',
    'category': 'Point of Sale',
    'depends': ['point_of_sale'],
    'data': [
      'views/pos_customization.xml',
      'views/PosOrderReceiptTemplate.xml',
      'views/CustomCharFieldTemplate.xml',
      'views/ChangeButtonTemplate.xml'
      ],
    # 'qweb': ['views/pos_customization.xml'],
    'assets': {
        'point_of_sale.assets': [
            '/pos_inharitance/static/src/js/DisablePriceDiscountButtons.js',
            '/pos_inharitance/static/src/js/ChangeButton.js',
            '/pos_inharitance/static/src/js/FieldFocus.js',
            '/pos_inharitance/static/src/js/CustomCharField.js',
            '/pos_inharitance/static/src/js/FormFocuse.js',
            '/pos_inharitance/static/src/js/PosOrderReceipt.js',
        ],
    },
}
