(function() {
    'use strict';

    var root = this;

    root.define([
            'collections/contact'
        ],
        function( ContactCollection ) {

            describe('ContactCollection Collection', function () {

                it('should be an instance of ContactCollection Collection', function () {
                    var contactCollection = new ContactCollection();
                    expect( contactCollection ).to.be.an.instanceOf( ContactCollection );
                });
            });

        });

}).call( this );
