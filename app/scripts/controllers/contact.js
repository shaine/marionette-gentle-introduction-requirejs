define([
    'backbone',
    'jquery',
    'views/composite/contact',
    'views/edit/contact',
    'controllers/show/contact',
    'communicator',
    'views/loading'
],
function( Backbone, $, ContactCollectionView, ContactEditView, contactShowController, Communicator, LoadingView ) {
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

                contactCollectionView.on('itemview:contact:edit', function(childView, model) {
                    var view = new ContactEditView({
                        model: model,
                        asModal: true
                    });

                    view.on('form:submit', function(data) {
                        if (model.save(data)) {
                            childView.render();
                            Communicator.mediator.trigger('app:dialog:close');
                            childView.flash('success');
                        } else {
                            view.triggerMethod('form:data:invalid', model.validationError);
                        }
                    });

                    Communicator.mediator.trigger('app:dialog', view);
                });

                Communicator.mediator.trigger('app:show', contactCollectionView);
            });
        }
    }))();

});
