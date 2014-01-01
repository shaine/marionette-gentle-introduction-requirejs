define([
    'backbone',
    'views/item/contact'
],
function( Backbone, ContactItemView  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CollectionView.extend({

        initialize: function() {
            console.log('initialize a Contact CollectionView');
        },

        itemView: ContactItemView,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
