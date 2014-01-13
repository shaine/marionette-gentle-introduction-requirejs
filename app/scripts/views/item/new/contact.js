define([
    'views/item/_form'
],
function( FormView ) {
    'use strict';

    /* Return a ItemView class definition */
    return FormView.extend({
        title: 'New Contact',

        onRender: function() {
            this.$('.js-submit').text('Create Contact');
        }
    });

});
