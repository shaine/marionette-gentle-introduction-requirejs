define([
    'backbone',
    'communicator',
    'models/contact',
    'collections/contact',
    'routers/router'
],

function( Backbone, Communicator, Contact, ContactCollection, router ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({mainRegion: '#mainRegion'});

    App.navigate = function(route, options){
        if (!options) {
            options = {};
        }
        Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function() {
        return Backbone.history.fragment;
    };

    /* Add initializers here */
    App.addInitializer( function () {
        var contacts;

        var initializeContacts = function(){
            var contacts = new ContactCollection([
                { id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '555-0184' },
                { id: 2, firstName: 'Bob', lastName: 'Brigham', phoneNumber: '555-0163' },
                { id: 3, firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '555-0129' }
            ]);

            contacts.forEach(function(contact) {
                contact.save();
            });

            return contacts.models;
        };

        var API = {
            getContactEntities: function(){
                var contacts = new ContactCollection();
                var defer = $.Deferred();
                setTimeout(function() {
                    contacts.fetch({
                        success: function(data) {
                            defer.resolve(data);
                        }
                    });
                }, 2000);

                var promise = defer.promise();
                $.when(promise).done(function(contacts) {
                    if (contacts.length === 0) {
                        var models = initializeContacts();
                        contacts.reset(models);
                    }
                });


                return defer.promise();
            },

            getContactEntity: function(id) {
                var contact = new Contact({id: id});
                var defer = $.Deferred();
                setTimeout(function() {
                    contact.fetch({
                        success: function(data) {
                            defer.resolve(data);
                        },
                        error: function(data) {
                            defer.resolve(undefined);
                        }
                    });
                }, 2000);

                return defer.promise();
            }
        };

        Communicator.reqres.setHandler('contact:entities', function() {
            return API.getContactEntities();
        });

        Communicator.reqres.setHandler('contact:entity', function(id) {
            return API.getContactEntity(id);
        });

        Communicator.mediator.on('app:show', function(view) {
            App.mainRegion.show(view);
        });
    });

    App.on('initialize:after', function() {
        if (Backbone.history) {
            Backbone.history.start({
                pushState: true
            });

            if (this.getCurrentRoute() === '') {
                Communicator.mediator.trigger('contacts:list');
            }
        }

        Communicator.mediator.trigger('app:start');
    });

    return App;
});
