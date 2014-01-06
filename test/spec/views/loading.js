(function() {
    'use strict';

    var root = this;

    root.define([
            'views/loading'
        ],
        function( Loading ) {

            describe('Loading View', function () {

                it('should be an instance of Loading View', function () {
                    var loading = new Loading();
                    expect( loading ).to.be.an.instanceOf( Loading );
                });
            });

        });

}).call( this );
