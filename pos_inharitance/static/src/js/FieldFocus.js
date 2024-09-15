odoo.define('pos_inharitance.FieldFocus', function(require) {
  'use strict';

  const fieldRegistry = require('web.field_registry');
  const FieldChar = require('web.basic_fields').FieldChar;

  const CustomCharField = FieldChar.extend({
      events: _.extend({}, FieldChar.prototype.events, {
          'focus': '_onFocus',
      }),

      _onFocus: function() {
          this.$el.css('background-color', 'yellow');
      },

      start: function() {
          const self = this;
          return this._super.apply(this, arguments).then(function() {
              if (!self.recordData[self.name]) {
                  self.$el.focus();
              }
          });
      }
  });

  fieldRegistry.add('char_focus_custom', CustomCharField);
});
