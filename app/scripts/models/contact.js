define([
    'backbone',
    'entities/local-storage'
],
function( Backbone, LocalStorage ) {
    'use strict';

    /* Return a model class definition */
    var Contact = Backbone.Model.extend({
        initialize: function() {
            console.log('initialize a Contact model');
        },

        defaults: {},

        urlRoot: 'contacts'

    });

    LocalStorage.configureStorage(Contact);

    return Contact;
});
