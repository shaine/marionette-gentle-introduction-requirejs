define([
    'backbone',
    'views/collection/contact',
    'controllers/show/contact',
    'communicator'
],
function( Backbone, ContactCollectionView, contactShowController, Communicator ) {
    'use strict';

    return new (Backbone.Marionette.Controller.extend({

        initialize: function( options ) {
            console.log('initialize a Contact Controller');
        },

        listContacts: function() {
            var contacts = Communicator.reqres.request('contact:entities');

            var contactCollectionView = new ContactCollectionView({
                collection: contacts
            });

            contactCollectionView.on('itemview:contact:delete', function(childView, model){
                contacts.remove(model);
            });

            contactCollectionView.on('itemview:contact:show', function(childView, model){
                contactShowController.showContact(model.get('id'));

                Communicator.mediator.trigger('contact:show', model.get('id'));
            });

            Communicator.mediator.trigger('app:show', contactCollectionView);
        }
    }))();

});
