require([
    'backbone',
    'application',
    'region-manager'
],
function ( Backbone, App, RegionManager ) {
    'use strict';

    App.start();
    window.App = App;
});
