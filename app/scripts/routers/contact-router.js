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

    return Marionette.AppRouter.extend({
        initialize: function(option) {
            Communicator.mediator.on('contacts:list', function() {
                Backbone.history.navigate('contacts');
                this.controller.listContacts();
            });

            Communicator.mediator.on('contacts:filter', function(criterion) {
                if (criterion) {
                    Backbone.history.navigate('contacts/filter/criterion:' + criterion);
                } else {
                    Backbone.history.navigate('contacts');
                }
            });

            Communicator.mediator.on('contact:show', function(id) {
                Backbone.history.navigate('contacts/'+id);
                this.controller.showContact(id);
            });

            Communicator.mediator.on('contact:edit', function(id) {
                Backbone.history.navigate('contacts/'+id+'/edit');
                this.controller.editContact(id);
            });
        },

        appRoutes: {
            'contacts(/filter/criterion::criterion)': 'listContacts',
            'contacts/:id': 'showContact',
            'contacts/:id/edit': 'editContact'
        },

        controller: {
            listContacts: function(criterion) {
                contactController.listContacts(criterion);
            },
            showContact: function(id) {
                contactShowController.showContact(id);
            },
            editContact: function(id) {
                contactEditController.editContact(id);
            }
        }
    });
});
