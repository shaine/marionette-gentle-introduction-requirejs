define([
    'backbone',
    'communicator',
    'hbs!tmpl/welcome',
    'collections/contact',
    'views/collection/contact'
],

function( Backbone, Communicator, welcomeTmpl, ContactCollection, ContactCollectionView ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({mainRegion: '#mainRegion'});

    /* Add initializers here */
    App.addInitializer( function () {
    });

    App.on('initialize:after', function() {
        var contacts = new ContactCollection([
            {
                firstName: 'Bob',
                lastName: 'Brigham',
                phoneNumber: '555-0163'
            },
            {
                firstName: 'Alice',
                lastName: 'Arten',
                phoneNumber: '555-0184'
            },
            {
                firstName: 'Charlie',
                lastName: 'Campbell',
                phoneNumber: '555-0129'
            }
        ]);

        var contactsView = new ContactCollectionView({
            collection: contacts
        });

        App.mainRegion.show(contactsView);

        Communicator.mediator.trigger('APP:START');
    });

    return App;
});
