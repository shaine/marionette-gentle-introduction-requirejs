define([
    'backbone',
    'views/item/contact',
    'views/collection/contact'
],
function( Backbone, ContactItemView, ContactCollectionViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CollectionView.extend({

        initialize: function() {
            console.log('initialize a Contact CollectionView');
        },

        tagName: 'table',
        className: 'table table-hover',
        itemView: ContactItemView,
        itemViewContainer: 'tbody',
        template: ContactCollectionViewTmpl,

        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
