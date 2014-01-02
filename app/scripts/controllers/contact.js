define([
    'backbone',
    'views/collection/contact',
    'controllers/show/contact'
],
function( Backbone, ContactCollectionView, ContactShowController ) {
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

            contactCollectionView.on('itemview:contact:delete', function(childView, model){
                contacts.remove(model);
            });

            contactCollectionView.on('itemview:contact:show', function(childView, model){
                var contactShowController = new ContactShowController();
                contactShowController.showContact(model);
            });

            window.App.mainRegion.show(contactCollectionView);
        }
    });

});
