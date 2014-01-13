define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'hbs!tmpl/show/about'
],
function( Backbone, Marionette, Communicator, AboutShowViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a AboutShow ItemView');
        },

        template: AboutShowViewTmpl
    });
});
