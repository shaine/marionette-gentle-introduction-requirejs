define([
    'backbone',
    'views/show/contact',
    'application'
],
function( Backbone, ContactShowView, App ) {
    'use strict';

    return Backbone.Marionette.Controller.extend({
        showContact: function(model) {
            var contactShowView = new ContactShowView({
                model: model
            });

            App.mainRegion.show(contactShowView);
        }
    });

});
