(function() {
    'use strict';

    var root = this;

    root.define([
            'controllers/edit/contact'
        ],
        function( EditContact ) {
            describe('EditContact Controller', function () {

                it('should be an instance of EditContact Controller', function () {
                    var edit/contact = new EditContact();
                    expect( edit/contact ).to.be.an.instanceOf( EditContact );
                });
            });
        });

}).call( this );
