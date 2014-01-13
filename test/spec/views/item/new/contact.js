(function() {
    'use strict';

    var root = this;

    root.define([
            'views/item/new/contact'
        ],
        function( NewContact ) {
            describe('NewContact Itemview', function () {

                it('should be an instance of NewContact Itemview', function () {
                    var new/contact = new NewContact();
                    expect( new/contact ).to.be.an.instanceOf( NewContact );
                });
            });
        });

}).call( this );
