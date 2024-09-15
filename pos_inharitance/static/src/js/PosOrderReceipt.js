odoo.define('pos_inharitance.PosOrderReceipt', function (require) {
  'use strict';

  const PosComponent = require('point_of_sale.PosComponent');
  const Registries = require('point_of_sale.Registries');
  const rpc = require('web.rpc');

 const PosOrderReceipt = (PosComponent) => class extends PosComponent {
      async sendReceipt(orderId) {
          try {
              // Panggil metode server untuk mengirim email
              await rpc.query({
                  model: 'pos.order',
                  method: '_email_receipt',
                  args: [[orderId]],
              });
              this.showSuccessMessage('Email sudah dikirim');
          } catch (error) {
              this.showErrorMessage('Terjadi kesalahan saat mengirim email');
          }
      }

      showSuccessMessage(message) {
          // Implementasi pesan sukses
          console.log(message);
      }

      showErrorMessage(message) {
          // Implementasi pesan error
          console.error(message);
      }
  }

  PosOrderReceipt.template = 'PosOrderReceiptTemplate';
  Registries.Component.add(PosOrderReceipt);

  return PosOrderReceipt;
});