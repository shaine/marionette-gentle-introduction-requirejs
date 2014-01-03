define([
    'backbone',
    'communicator',
    'collections/contact',
    'routers/router'
],

function( Backbone, Communicator, ContactCollection, router ) {
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
            contacts = new ContactCollection([
                { id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '555-0184' },
                { id: 2, firstName: 'Bob', lastName: 'Brigham', phoneNumber: '555-0163' },
                { id: 3, firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '555-0129' }
            ]);
        };

        var API = {
            getContactEntities: function(){
                if(contacts === undefined){
                    initializeContacts();
                }
                return contacts;
            }
        };

        Communicator.reqres.setHandler('contact:entities', function(){
            return API.getContactEntities();
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
