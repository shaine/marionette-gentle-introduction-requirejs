define([
    'backbone',
    'communicator',
    'views/show/about'
],
function(Backbone, Communicator, AboutShowView) {
    'use strict';

    return Backbone.Marionette.Controller.extend({

        initialize: function( options ) {
            console.log('initialize a Contact Controller');
        },

        showAbout: function() {
            var view = new AboutShowView();
            Communicator.mediator.trigger('app:show', view);
        }
    });

});
