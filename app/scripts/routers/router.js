define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'controllers/contact',
    'controllers/show/contact',
    'controllers/edit/contact'
],
function(Backbone, Marionette, Communicator, contactController, contactShowController, contactEditController) {
    'use strict';

    var router = new (Marionette.AppRouter.extend({
        appRoutes: {
            'contacts': 'listContacts',
            'contacts/:id': 'showContact',
            'contacts/:id/edit': 'editContact'
        },

        controller: {
            listContacts: function() {
                contactController.listContacts();
            },
            showContact: function(id) {
                contactShowController.showContact(id);
            },
            editContact: function(id) {
                contactEditController.editContact(id);
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

    Communicator.mediator.on('contact:edit', function(id) {
        Backbone.history.navigate('contacts/'+id/+'edit');
        router.controller.editContact(id);
    });

    return router;
});
