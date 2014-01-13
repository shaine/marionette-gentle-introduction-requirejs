define([
    'backbone',
    'communicator'
],
function(Backbone, Communicator) {
    'use strict';

    return Backbone.Marionette.Controller.extend({

        initialize: function( options ) {
            console.log('initialize a Contact Controller');
        }
    });

});
