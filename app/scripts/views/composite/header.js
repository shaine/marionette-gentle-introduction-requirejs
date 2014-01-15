define([
    'backbone',
    'views/item/header',
    'hbs!tmpl/composite/header'
],
function( Backbone, HeaderItemView, HeaderCompositeViewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CompositeView.extend({
        template: HeaderCompositeViewTmpl,
        itemView: HeaderItemView,
        itemViewContainer: 'ul',
        className: 'navbar navbar-inverse navbar-fixed-top',

        events: {
            'click a.brand': 'brandClicked'
        },

        brandClicked: function(e) {
            e.preventDefault();
            this.trigger('brand:clicked');
        }
    });

});
