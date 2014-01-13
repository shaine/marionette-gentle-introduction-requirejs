define([
    'backbone',
    'hbs!tmpl/item/panel'
],
function( Backbone, PanelViewTmpl  ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a Panel ItemView');
        },

        template: PanelViewTmpl,

        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        triggers: {
            'click button.js-new': 'contact:new'
        },

        /* on render callback */
        onRender: function() {}
    });

});
