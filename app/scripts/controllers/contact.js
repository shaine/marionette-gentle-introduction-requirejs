define([
    'backbone',
    'jquery',
    'views/composite/contact',
    'views/item/new/contact',
    'views/edit/contact',
    'views/loading',
    'views/layout/contact-list',
    'views/item/panel',
    'models/contact',
    'controllers/show/contact',
    'communicator'
],
function( Backbone, $, ContactCollectionView, ContactNewView, ContactEditView, LoadingView, ContactListLayoutView, PanelView, Contact, contactShowController, Communicator ) {
    'use strict';

    return new (Backbone.Marionette.Controller.extend({

        initialize: function( options ) {
            console.log('initialize a Contact Controller');
        },

        listContacts: function() {
            var loadingView = new LoadingView();
            Communicator.mediator.trigger('app:show', loadingView);

            var fetchingContacts = Communicator.reqres.request('contact:entities');

            var contactListLayoutView = new ContactListLayoutView();
            var panelView = new PanelView();

            $.when(fetchingContacts).done(function(contacts) {
                var contactCollectionView = new ContactCollectionView({
                    collection: contacts
                });

                contactListLayoutView.on('show', function() {
                    contactListLayoutView.panelRegion.show(panelView);
                    contactListLayoutView.contactsRegion.show(contactCollectionView);
                    panelView.on('contact:new', function() {
                        var model = new Contact();
                        var view = new ContactNewView({
                            model: model
                        });

                        view.on('form:submit', function(data) {
                            if (contacts.length > 0) {
                                var heighestId = contacts.max(function(c) { return c.id; }).get('id');
                                data.id = heighestId + 1;
                            } else {
                                data.id = 1;
                            }

                            if (model.save(data)) {
                                contacts.add(model);
                                view.trigger('dialog:close');
                                contactCollectionView.children.findByModel(model).flash('success');
                            } else {
                                view.triggerMethod('form:data:invalid', model.validationError);
                            }
                        });

                        Communicator.mediator.trigger('app:dialog', view);
                    });
                });

                contactCollectionView.on('itemview:contact:delete', function(childView, model){
                    model.destroy();
                });

                contactCollectionView.on('itemview:contact:show', function(childView, model){
                    contactShowController.showContact(model.get('id'));

                    Communicator.mediator.trigger('contact:show', model.get('id'));
                });

                contactCollectionView.on('itemview:contact:edit', function(childView, model) {
                    var view = new ContactEditView({
                        model: model
                    });

                    view.on('form:submit', function(data) {
                        if (model.save(data)) {
                            childView.render();
                            view.trigger('dialog:close');
                            childView.flash('success');
                        } else {
                            view.triggerMethod('form:data:invalid', model.validationError);
                        }
                    });

                    Communicator.mediator.trigger('app:dialog', view);
                });

                Communicator.mediator.trigger('app:show', contactListLayoutView);
            });
        }
    }))();

});
