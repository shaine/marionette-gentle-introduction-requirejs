define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'hbs!tmpl/show/contact'
],
function( Backbone, Marionette, Communicator, ContactShowViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a ContactShow ItemView');
        },

        template: ContactShowViewTmpl,

        /* Ui events hash */
        events: {
            'click a.js-edit': 'editClicked'
        },

        editClicked: function(e) {
            e.preventDefault();
            this.trigger('contact:edit', this.model);
        }
    });
});
