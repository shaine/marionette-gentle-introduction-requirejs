define([
    'backbone',
    'communicator',
    'views/composite/header'
],
function(Backbone, Communicator, HeaderCompositeView) {
    'use strict';

    return Backbone.Marionette.Controller.extend({
        listHeader: function() {
            var links = Communicator.reqres.request('header:links');
            var headers = new HeaderCompositeView({collection: links});

            headers.on('brand:clicked', function() {
                Communicator.mediator.trigger('contacts:list');
            });

            headers.on('itemview:navigate', function(childView, model) {
                var trigger = model.get('navigationTrigger');
                Communicator.mediator.trigger(trigger);
            });

            Communicator.mediator.trigger('app:header', headers);
        },

        setActiveHeader: function(headerUrl) {
            var links = Communicator.reqres.request('header:links');
            var headerToSelect = links.find(function(header){ return header.get('url') === headerUrl; });
            headerToSelect.select();
            links.trigger('reset');
        }
    });

});
