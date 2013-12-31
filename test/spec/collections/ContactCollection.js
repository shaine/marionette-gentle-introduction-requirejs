(function() {
    'use strict';

    var root = this;

    root.define([
            'collections/ContactCollection'
        ],
        function( Contactcollection ) {

            describe('Contactcollection Collection', function () {

                it('should be an instance of Contactcollection Collection', function () {
                    var ContactCollection = new Contactcollection();
                    expect( ContactCollection ).to.be.an.instanceOf( Contactcollection );
                });
            });

        });

}).call( this );
