(function() {
    'use strict';

    var root = this;

    root.define([
            'views/item/contact-missing'
        ],
        function( ContactMissing ) {

            describe('ContactMissing Itemview', function () {

                it('should be an instance of ContactMissing Itemview', function () {
                    var contact-missing = new ContactMissing();
                    expect( contact-missing ).to.be.an.instanceOf( ContactMissing );
                });
            });

        });

}).call( this );
