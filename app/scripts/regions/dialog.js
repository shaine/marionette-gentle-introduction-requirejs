define([
    'backbone'
],
function( Backbone ) {
    'use strict';

    /* Return a Region class definition */
    return Backbone.Marionette.Region.extend({

        initialize: function() {
            console.log('initialize a Dialog Region');
        },

        onShow: function(view) {
            this.listenTo(view, 'dialog:close', this.closeDialog);

            var self = this;

            this.$el.dialog({
                modal: true,
                title: view.title,
                width: 'auto',
                close: function(e, ui) {
                    self.closeDialog();
                }
            });
        },

        closeDialog: function() {
            this.stopListening();
            this.close();
            this.$el.dialog('destroy');
        }
    });

});
