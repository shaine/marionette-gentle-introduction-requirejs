define([
    'views/item/_form'
],
function( FormView ) {
    'use strict';

    /* Return a ItemView class definition */
    return FormView.extend({

        initialize: function() {
            console.log('initialize a EditContact ItemView');
            this.title = 'Edit ' + this.model.get('firstName') + ' ' + this.model.get('lastName');
        },

        /* on render callback */
        onRender: function() {
            if (this.options.generateTitle) {
                var $title = $('<h1>', {text: this.title});
                this.$el.prepend($title);
            }

            this.$('.js-submit').text('Update Contact');
        }
    });
});
