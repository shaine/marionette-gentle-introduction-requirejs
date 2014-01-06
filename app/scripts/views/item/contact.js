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
            'click td a.js-show': 'showClicked'
        },

        highlightName: function(e){
            this.$el.toggleClass('warning');
        },

        deleteClicked: function(e){
            e.stopPropagation();
            this.trigger('contact:delete', this.model);
        },

        showClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger('contact:show', this.model);
        },

        remove: function(){
            var self = this;
            this.$el.fadeOut(function(){
                Marionette.ItemView.prototype.remove.call(self);
            });
        },

        /* on render callback */
        onRender: function() {}
    });

});
