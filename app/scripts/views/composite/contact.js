define([
    'backbone',
    'views/item/contact',
    'hbs!tmpl/composite/contact'
],
function( Backbone, ContactItemView, ContactCollectionViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CompositeView.extend({

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
