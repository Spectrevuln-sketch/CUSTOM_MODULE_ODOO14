odoo.define('pos_inharitance.DisablePriceDiscountButtons', function(require) {
  'use strict';

  const NumpadWidget = require('point_of_sale.NumpadWidget');
  const Registries = require('point_of_sale.Registries');

  const DisablePriceDiscountButtons = (NumpadWidget) => class extends NumpadWidget {
      mounted() {
          super.mounted();
          console.log("Module Disable Price Detected !")
          const discountButton = this.el.querySelectorAll('.mode-button');
          if (discountButton.length > 0) {
            console.log("discount button", discountButton[1])
              discountButton[1].classList.add('disabled-mode');
              discountButton[1].setAttribute('disabled', 'true');
              discountButton[1].removeEventListener('click', this.changeMode);
          }
      }
  };

  // Register the modified NumpadWidget
  Registries.Component.extend(NumpadWidget, DisablePriceDiscountButtons);
});
