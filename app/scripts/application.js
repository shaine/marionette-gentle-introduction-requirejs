define([
    'backbone',
    'communicator',
    'hbs!tmpl/welcome'
],

function( Backbone, Communicator, welcomeTmpl ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({});

    /* Add initializers here */
    App.addInitializer( function () {
        document.body.innerHTML = welcomeTmpl({ success: 'CONGRATS!' });
        Communicator.mediator.trigger('APP:START');
    });

    return App;
});
