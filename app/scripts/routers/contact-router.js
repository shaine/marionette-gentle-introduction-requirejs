define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'controllers/contact',
    'controllers/show/contact',
    'controllers/edit/contact'
],
function(Backbone, Marionette, Communicator, ContactController, ContactShowController, ContactEditController) {
    'use strict';

    return Marionette.AppRouter.extend({
        initialize: function(option) {
            var self = this;

            this.contactController = new ContactController();
            this.contactShowController = new ContactShowController();
            this.contactEditController = new ContactEditController();

            Communicator.mediator.on('contacts:list', function() {
                Backbone.history.navigate('contacts');
                self.listContacts();
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
                self.showContact(id);
            });

            Communicator.mediator.on('contact:edit', function(id) {
                Backbone.history.navigate('contacts/'+id+'/edit');
                self.editContact(id);
            });
        },

        routes: {
            'contacts(/filter/criterion::criterion)': 'listContacts',
            'contacts/:id': 'showContact',
            'contacts/:id/edit': 'editContact'
        },

        listContacts: function(criterion) {
            this.contactController.listContacts(criterion);
        },
        showContact: function(id) {
            this.contactShowController.showContact(id);
        },
        editContact: function(id) {
            this.contactEditController.editContact(id);
        }
    });
});
