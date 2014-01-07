define([
    'backbone',
    'backbone.marionette',
    'hbs!tmpl/item/contact'
],
function( Backbone, Marionette, ContactItemViewTmpl ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

        initialize: function() {
            console.log('initialize a ContactItemView ItemView');
        },

        tagName: 'tr',
        template: ContactItemViewTmpl,


        /* ui selector cache */
        ui: {},

        /* Ui events hash */
        events: {
            'click': 'highlightName',
            'click button.js-delete': 'deleteClicked',
            'click td a.js-show': 'showClicked',
            'click td a.js-edit': 'editClicked'
        },

        highlightName: function(e) {
            this.$el.toggleClass('warning');
        },

        deleteClicked: function(e) {
            e.stopPropagation();
            this.trigger('contact:delete', this.model);
        },

        showClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger('contact:show', this.model);
        },

        editClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger('contact:edit', this.model);
        },

        flash: function(cssClass) {
            var $view = this.$el;
            $view.hide().toggleClass(cssClass).fadeIn(800, function() {
                setTimeout(function() {
                    $view.toggleClass(cssClass);
                }, 500);
            });
        },

        remove: function() {
            var self = this;
            this.$el.fadeOut(function(){
                Marionette.ItemView.prototype.remove.call(self);
            });
        },

        /* on render callback */
        onRender: function() {}
    });

});
