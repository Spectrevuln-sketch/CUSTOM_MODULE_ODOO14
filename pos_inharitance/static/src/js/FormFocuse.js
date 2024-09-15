odoo.define('your_module_name.FormFocusController', function (require) {
  'use strict';

  const FormController = require('web.FormController');
  const { Component, useRef, useEffect } = require('owl');
  const { useState } = require('owl.hooks');

  const FormFocusController = (FormController)=> class extends FormController {
      constructor() {
          super(...arguments);
          this.state = useState({
              focused: false
          });
      }

      renderButtons($node) {
          super.renderButtons($node);
          this._focusInput();
      }

      _focusInput() {
          const input = this.el.querySelector('input[name="your_char_field"]');
          if (input) {
              input.focus();
          }
      }
  }

  return FormFocusController;
});
