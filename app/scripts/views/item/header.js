define([
    'backbone',
    'hbs!tmpl/item/header'
],
function(Backbone, HeaderItemViewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
        template: HeaderItemViewTmpl,
        tagName: 'li',

        events: {
            'click a': 'navigate'
        },

        navigate: function(e) {
            e.preventDefault();
            this.trigger('navigate', this.model);
        },

        onRender: function() {
            if (this.model.selected) {
                this.$el.addClass('active');
            }
        }
    });

});
