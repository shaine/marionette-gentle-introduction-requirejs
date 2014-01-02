require([
    'backbone',
    'application',
    'region-manager',
    'controllers/contact'
],
function ( Backbone, App, RegionManager, ContactController ) {
    'use strict';

    App.start();
    window.App = App;

    var contactController = new ContactController();
    contactController.listContacts();
});
