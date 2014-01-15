define([
    'backbone',
    'underscore',
    'models/header'
],
function(Backbone, _, Header) {
    'use strict';

    /* Return a collection class definition */
    return Backbone.Collection.extend({
        initialize: function() {
            var singleSelect = new Backbone.Picky.SingleSelect(this);
            _.extend(this, singleSelect);
            console.log('initialize a Contact collection');
        },

        model: Header
    });
});
