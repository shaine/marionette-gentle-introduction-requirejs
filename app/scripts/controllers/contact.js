define([
    'backbone',
    'jquery',
    'views/composite/contact',
    'controllers/show/contact',
    'communicator',
    'views/loading'
],
function( Backbone, $, ContactCollectionView, contactShowController, Communicator, LoadingView ) {
    'use strict';

    return new (Backbone.Marionette.Controller.extend({

        initialize: function( options ) {
            console.log('initialize a Contact Controller');
        },

        listContacts: function() {
            var loadingView = new LoadingView();
            Communicator.mediator.trigger('app:show', loadingView);

            var fetchingContacts = Communicator.reqres.request('contact:entities');

            $.when(fetchingContacts).done(function(contacts) {
                var contactCollectionView = new ContactCollectionView({
                    collection: contacts
                });

                contactCollectionView.on('itemview:contact:delete', function(childView, model){
                    model.destroy();
                });

                contactCollectionView.on('itemview:contact:show', function(childView, model){
                    contactShowController.showContact(model.get('id'));

                    Communicator.mediator.trigger('contact:show', model.get('id'));
                });

                Communicator.mediator.trigger('app:show', contactCollectionView);
            });
        }
    }))();

});
