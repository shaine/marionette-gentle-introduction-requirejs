define([
    'backbone',
    'communicator',
    'views/show/contact',
    'views/show/contact-missing'
],
function( Backbone, Communicator, ContactShowView, ContactMissingShowView ) {
    'use strict';

    return new (Backbone.Marionette.Controller.extend({
        showContact: function(id) {
            var contacts = Communicator.reqres.request('contact:entities');
            var model = contacts.get(id);
            var contactShowView;

            if (typeof model !== 'undefined') {
                contactShowView = new ContactShowView({
                    model: model
                });
            } else {
                contactShowView = new ContactMissingShowView();
            }

            Communicator.mediator.trigger('app:show', contactShowView);
        }
    }))();

});
