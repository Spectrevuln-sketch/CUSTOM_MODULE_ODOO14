odoo.define('pos_inharitance.CustomCharField', function (require) {
  'use strict';

  const { Component, useRef } = require('owl');
  const { FieldChar } = require('web.basic_fields');

  const CustomCharField =  (FieldChar) => class extends FieldChar {
      constructor() {
          super(...arguments);
          this.inputRef = useRef('input');
      }

      mounted() {
          super.mounted();
          this.focusInput(); // Autofocus when the component is mounted
      }

      focusInput() {
          if (this.inputRef.el) {
              this.inputRef.el.focus();
          }
      }

      // Override the template method to add custom behavior
      _onFocusIn(event) {
          super._onFocusIn(event);
          this.el.style.backgroundColor = 'yellow';
      }
  }

  CustomCharField.template = 'CustomCharFieldTemplate'; // Define the template below
  CustomCharField.props = {
      ...FieldChar.props,
      // additional props if needed
  };

  return CustomCharField;
});
