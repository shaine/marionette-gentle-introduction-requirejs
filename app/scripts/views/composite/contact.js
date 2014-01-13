define([
    'backbone',
    'views/item/contact',
    'views/item/empty',
    'hbs!tmpl/composite/contact'
],
function( Backbone, ContactItemView, NoContactItemView, ContactCollectionViewTmpl ) {
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
        emptyView: NoContactItemView,

        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {},

        onCompositeCollectionRendered: function() {
            this.appendHtml = function(collectionView, itemView, index) {
                collectionView.$el.prepend(itemView.el);
            };
        }
    });

});
