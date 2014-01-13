(function() {
    'use strict';

    var root = this;

    root.define([
            'views/show/contact-missing'
        ],
        function( ContactMissing ) {

            describe('ContactMissing Itemview', function () {

                it('should be an instance of ContactMissing Itemview', function () {
                    var contactMissing = new ContactMissing();
                    expect( contactMissing ).to.be.an.instanceOf( ContactMissing );
                });
            });

        });

}).call( this );
