define([
    'backbone',
    'hbs!tmpl/item/contact'
],
function( Backbone, ContactItemViewTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a ContactItemView ItemView');
        },

        template: ContactItemViewTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
