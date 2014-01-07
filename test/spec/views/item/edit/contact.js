(function() {
    'use strict';

    var root = this;

    root.define([
            'views/item/edit/contact'
        ],
        function( EditContact ) {
            describe('EditContact Itemview', function () {

                it('should be an instance of EditContact Itemview', function () {
                    var edit/contact = new EditContact();
                    expect( edit/contact ).to.be.an.instanceOf( EditContact );
                });
            });
        });

}).call( this );
