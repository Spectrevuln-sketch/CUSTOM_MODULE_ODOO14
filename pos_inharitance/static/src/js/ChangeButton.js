odoo.define('pos_inharitance.ChangeButton', function(require) {
    'use strict';

    const PaymentScreenNumpad = require('point_of_sale.PaymentScreenNumpad');
    const PSNumpadInputButton = require('point_of_sale.PSNumpadInputButton');
    const Registries = require('point_of_sale.Registries');

    const ChangeButton = (PaymentScreenNumpad) => class extends PaymentScreenNumpad {
        mounted() {
            super.mounted();
            console.log("Module Change Button Detected!");

            // Mengambil tombol dengan kelas mode-button
            const buttonMode = this.el.querySelectorAll('button.mode-button');

            buttonMode.forEach((button, index) => {
                switch(index) {
                    case 0:
                        button.setAttribute('value', 10000);
                        button.innerText = '+10.000';
                        break;
                    case 1:
                        button.setAttribute('value', 50000);
                        button.innerText = '+50.000';
                        break;
                    case 2:
                        button.setAttribute('value', 100000);
                        button.innerText = '+100.000';
                        break;
                    default:
                        break;
                }

                // Menambahkan event listener untuk memastikan nilai tetap konsisten
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    console.log('Button Attribute Value', button.getAttribute('value'))
                    event.stopPropagation();
                    this.trigger('input-from-numpad', { key: button.getAttribute('value') });
                });
            });
        }
    };

    Registries.Component.extend(PaymentScreenNumpad, ChangeButton);
});



