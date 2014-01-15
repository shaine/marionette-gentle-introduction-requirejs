define([
    'backbone',
    'underscore'
],
function(Backbone, _) {
    'use strict';

    /* Return a model class definition */
    return Backbone.Model.extend({
        initialize: function() {
            var selectable = new Backbone.Picky.Selectable(this);
            _.extend(this, selectable);
            console.log('initialize a Header model');
        }
    });
});
