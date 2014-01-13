(function() {
    'use strict';

    var root = this;

    root.define([
            'regions/dialog'
        ],
        function( Dialog ) {
            describe('Dialog Region', function () {

                it('should be an instance of Dialog Region', function () {
                    var dialog = new Dialog();
                    expect( dialog ).to.be.an.instanceOf( Dialog );
                });
            });
        });

}).call( this );
