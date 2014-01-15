define([
    'backbone',
    'backbone.marionette',
    'communicator',
    'controllers/about'
],
function(Backbone, Marionette, Communicator, AboutController) {
    'use strict';

    return Marionette.AppRouter.extend({
        initialize: function(option) {
            var self = this;

            this.aboutController = new AboutController();

            Communicator.mediator.on('contact:edit', function(id) {
                Backbone.history.navigate('about');
                self.showAbout();
            });
        },

        routes: {
            'about': 'showAbout'
        },

        showAbout: function() {
            this.aboutController.showAbout();
            Communicator.command.execute('set:active:header', 'about');
        }
    });
});
