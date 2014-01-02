define([
    'backbone',
    'views/collection/contact'
],
function( Backbone, ContactCollectionView ) {
    'use strict';

    return Backbone.Marionette.Controller.extend({

        initialize: function( options ) {
            console.log('initialize a Contact Controller');
        },

        listContacts: function() {
            var contacts = window.App.request('contact:entities');

            var contactCollectionView = new ContactCollectionView({
                collection: contacts
            });

            window.App.mainRegion.show(contactCollectionView);
        }
    });

});
