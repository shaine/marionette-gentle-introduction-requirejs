define([
    'backbone',
    'backbone.marionette',
    'hbs!tmpl/item/empty'
],
function( Backbone, Marionette, NoContactItemViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.CompositeView.extend({
        template: NoContactItemViewTmpl,
        tagName: 'tr',
        className: 'alert'
    });
});
