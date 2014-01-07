define([
    'backbone',
    'entities/local-storage',
    'underscore'
],
function( Backbone, LocalStorage, _ ) {
    'use strict';

    /* Return a model class definition */
    var Contact = Backbone.Model.extend({
        initialize: function() {
            console.log('initialize a Contact model');
        },

        defaults: {},

        urlRoot: 'contacts',

        validate: function(attrs, options) {
            var errors = {};
            if (!attrs.firstName) {
                errors.firstName = 'can\'t be blank';
            }
            if (!attrs.lastName) {
                errors.lastName = 'can\'t be blank';
            }
            else{
                if (attrs.lastName.length < 2) {
                    errors.lastName = 'is too short';
                }
            }
            if(!_.isEmpty(errors)){
                return errors;
            }
        }
    });

    LocalStorage.configureStorage(Contact);

    return Contact;
});
