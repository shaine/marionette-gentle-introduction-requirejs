define([
    'backbone',
    'hbs!tmpl/item/contact-missing_tmpl'
],
function( Backbone, ContactMissingTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a ContactMissing ItemView');
        },

        template: ContactMissingTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
