define([
    'backbone',
    'communicator',
    'views/edit/contact',
    'views/show/contact-missing',
    'views/loading'
],
function( Backbone, Communicator, ContactEditView, ContactMissingShowView, LoadingView ) {
    'use strict';

    return new (Backbone.Marionette.Controller.extend({
        editContact: function(id) {
            var loadingView = new LoadingView({
                title: 'Preparing to Edit',
                message: 'Putting together an editor form'
            });
            Communicator.mediator.trigger('app:show', loadingView);

            var fetchingContact = Communicator.reqres.request('contact:entity', id);
            $.when(fetchingContact).done(function(contact) {
                var contactEditView;

                if (typeof contact !== 'undefined') {
                    contactEditView = new ContactEditView({
                        generateTitle: true,
                        model: contact
                    });

                    contactEditView.on('form:submit', function(data) {
                        if(contact.save(data)) {
                            Communicator.mediator.trigger('contact:show', id);
                        } else {
                            contactEditView.triggerMethod('form:data:invalid', contact.validationError);
                        }
                    });
                } else {
                    contactEditView = new ContactMissingShowView();
                }

                Communicator.mediator.trigger('app:show', contactEditView);
            });
        }
    }))();

});
