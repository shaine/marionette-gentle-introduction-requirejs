define([
    'backbone',
    'hbs!tmpl/show/contact-missing'
],
function( Backbone, ContactMissingShowViewTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a ContactShowMissing ItemView');
        },

        template: ContactMissingShowViewTmpl
    });

});
