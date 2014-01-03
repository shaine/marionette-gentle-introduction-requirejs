define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'controllers/contact',
    'controllers/show/contact'
],
function(Backbone, Marionette, Communicator, contactController, contactShowController){
    'use strict';

    var router = new (Marionette.AppRouter.extend({
        appRoutes: {
            'contacts': 'listContacts',
            'contacts/:id': 'showContact'
        },

        controller: {
            listContacts: function() {
                contactController.listContacts();
            },
            showContact: function(id) {
                contactShowController.showContact(id);
            }
        }
    }))();

    Communicator.mediator.on('contacts:list', function() {
        Backbone.history.navigate('contacts');
        router.controller.listContacts();
    });

    Communicator.mediator.on('contact:show', function(id) {
        Backbone.history.navigate('contacts/'+id);
        router.controller.showContact(id);
    });

    return router;
});
