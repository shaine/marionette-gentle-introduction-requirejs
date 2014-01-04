define([
    'backbone',
    'underscore'
],
function( Backbone, _ ) {
    'use strict';

    var findStorageKey = function(entity) {
        // Use entity's rootUrl value
        if (entity.urlRoot) {
            return _.result(entity, 'urlRoot');
        }
        // Use collection's URL value
        if (entity.url) {
            return _.result(entity, 'url');
        }
        // Fallback to get storage key from collection
        if (entity.collection && entity.collection.url) {
            return _.result(entity.collection, 'url');
        }

        throw new Error('Unable to obtain storage key');
    };

    var StorageMixin = function(entityPrototype) {
        var storageKey = findStorageKey(entityPrototype);
        return {
            localStorage: new Backbone.LocalStorage(storageKey)
        };
    };

    return {
        configureStorage: function(entity) {
            _.extend(entity.prototype, new StorageMixin(entity.prototype));
        }
    };
});
