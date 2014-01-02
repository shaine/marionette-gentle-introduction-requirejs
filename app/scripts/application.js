define([
    'backbone',
    'communicator',
    'collections/contact'
],

function( Backbone, Communicator, ContactCollection ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({mainRegion: '#mainRegion'});

    /* Add initializers here */
    App.addInitializer( function () {
    });

    App.on('initialize:after', function() {
        Communicator.mediator.trigger('APP:START');

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

        App.reqres.setHandler('contact:entities', function(){
            return API.getContactEntities();
        });
    });

    return App;
});
