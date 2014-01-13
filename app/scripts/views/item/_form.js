define([
    'backbone',
    'backbone.syphon',
    'underscore',
    'hbs!tmpl/item/_form'
],
function( Backbone, Syphon, _, ContactFormTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        template: ContactFormTmpl,

        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {
            'click button.js-submit': 'submitClicked'
        },

        submitClicked: function(e) {
            e.preventDefault();
            var data = Syphon.serialize(this);
            this.trigger('form:submit', data);
        },

        onFormDataInvalid: function(errors) {
            var $view = this.$el;

            var clearFormErrors = function() {
                var $form = $view.find('form');
                $form.find('.help-inline.error').each(function() {
                    $(this).remove();
                });
                $form.find('.control-group.error').each(function() {
                    $(this).removeClass('error');
                });
            };

            var markErrors = function(value, key) {
                var $controlGroup = $view.find('#contact-' + key).parent();
                var $errorEl = $('<span>', { class: 'help-inline error', text: value });
                $controlGroup.append($errorEl).addClass('error');
            };

            clearFormErrors();
            _.each(errors, markErrors);
        }
    });

});
