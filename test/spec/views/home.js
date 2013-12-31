(function() {
    'use strict';

    var root = this;

    root.define([
            'views/home'
        ],
        function( Home ) {

            describe('Home View', function () {

                it('should be an instance of Home View', function () {
                    var home = new Home();
                    expect( home ).to.be.an.instanceOf( Home );
                });
            });

        });

}).call( this );
