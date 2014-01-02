define([
    'backbone',
    'backbone.marionette',
    'hbs!tmpl/item/contact',
    'hbs!tmpl/show/contact'
],
function( Backbone, Marionette, ContactItemViewTmpl, ContactShowViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        template: ContactShowViewTmpl
    });
});
