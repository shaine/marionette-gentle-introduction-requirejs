define([
    'backbone',
    'models/contact'
],
function( Backbone, Contact ) {
    'use strict';

    /* Return a collection class definition */
    return Backbone.Collection.extend({
        initialize: function() {
            console.log('initialize a Contactcollection collection');
        },

        model: Contact

    });
});
