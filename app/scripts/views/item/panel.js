define([
    'backbone',
    'hbs!tmpl/item/panel'
],
function(Backbone, PanelViewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a Panel ItemView');
        },

        template: PanelViewTmpl,

        /* ui selector cache */
        ui: {
            criterion: 'input.js-filter-criterion'
        },

        /* Ui events hash */
        triggers: {
            'click button.js-new': 'contact:new'
        },

        events: {
            'submit #filter-form': 'filterContacts'
        },

        filterContacts: function(e) {
            e.preventDefault();
            var criterion = this.$('.js-filter-criterion').val();
            this.trigger('contacts:filter', criterion);
        },

        onSetFilterCriterion: function(criterion) {
            this.ui.criterion.val(criterion);
        },

        /* on render callback */
        onRender: function() {}
    });

});
