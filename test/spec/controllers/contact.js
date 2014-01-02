(function() {
    'use strict';

    var root = this;

    root.define([
            'controllers/contact'
        ],
        function( ContactController ) {

            describe('ContactController Controller', function () {

                it('should be an instance of ContactController Controller', function () {
                    var contactController = new ContactController();
                    expect( contactController ).to.be.an.instanceOf( ContactController );
                });
            });

        });

}).call( this );
