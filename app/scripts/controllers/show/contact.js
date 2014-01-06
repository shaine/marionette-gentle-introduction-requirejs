define([
    'backbone',
    'communicator',
    'views/show/contact',
    'views/show/contact-missing',
    'views/loading'
],
function( Backbone, Communicator, ContactShowView, ContactMissingShowView, LoadingView ) {
    'use strict';

    return new (Backbone.Marionette.Controller.extend({
        showContact: function(id) {
            var loadingView = new LoadingView({
                title: 'Artificial Loading Delay',
                message: 'Data loading is delayed to demonstrate using a loading view.'
            });
            Communicator.mediator.trigger('app:show', loadingView);

            var fetchingContact = Communicator.reqres.request('contact:entity', id);
            $.when(fetchingContact).done(function(contact) {
                var contactShowView;

                if (typeof contact !== 'undefined') {
                    contactShowView = new ContactShowView({
                        model: contact
                    });
                } else {
                    contactShowView = new ContactMissingShowView();
                }

                Communicator.mediator.trigger('app:show', contactShowView);
            });
        }
    }))();

});
