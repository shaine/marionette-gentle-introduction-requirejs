define([
    'backbone',
    'backbone.syphon',
    'underscore',
    'hbs!tmpl/edit/contact'
],
function( Backbone, Syphon, _, EditContactTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a EditContact ItemView');
        },

        template: EditContactTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {
            'click button.js-submit': 'submitClicked'
        },

        /* on render callback */
        onRender: function() {},

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
