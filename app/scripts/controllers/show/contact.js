define([
    'backbone',
    'communicator',
    'views/show/contact'
],
function( Backbone, Communicator, ContactShowView ) {
    'use strict';

    return new (Backbone.Marionette.Controller.extend({
        showContact: function(id) {
            var contacts = Communicator.reqres.request('contact:entities');
            var model = contacts.get(id);
            var contactShowView = new ContactShowView({
                model: model
            });

            Communicator.mediator.trigger('app:show', contactShowView);
        }
    }));

});
