(function() {
    'use strict';

    var root = this;

    root.define([
            'views/item/new/contact'
        ],
        function( NewContact ) {
            describe('NewContact Itemview', function () {

                it('should be an instance of NewContact Itemview', function () {
                    var newContact = new NewContact();
                    expect( newContact ).to.be.an.instanceOf( NewContact );
                });
            });
        });

}).call( this );
