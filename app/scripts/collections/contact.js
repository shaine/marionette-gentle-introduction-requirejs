define([
    'backbone',
    'models/contact',
    'entities/local-storage'
],
function( Backbone, Contact, LocalStorage ) {
    'use strict';

    /* Return a collection class definition */
    var ContactCollection = Backbone.Collection.extend({
        initialize: function() {
            console.log('initialize a Contact collection');
        },

        url: 'contacts',
        model: Contact,
        comparator: 'firstName'

    });

    LocalStorage.configureStorage(ContactCollection);

    return ContactCollection;
});
