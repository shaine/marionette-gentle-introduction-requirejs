define([
    'backbone',
    'hbs!tmpl/layout/contact-list'
],
function( Backbone, ContactListViewTmpl  ) {
    'use strict';

    /* Return a Layout class definition */
    return Backbone.Marionette.Layout.extend({

        initialize: function() {
            console.log('initialize a ContactList Layout');
        },

        template: ContactListViewTmpl,

        /* Layout sub regions */
        regions: {
            panelRegion: '#panel-region',
            contactsRegion: '#contacts-region'
        },

        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {},

        /* on render callback */
        onRender: function() {}
    });

});
