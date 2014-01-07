(function() {
    'use strict';

    var root = this;

    root.define([
            'views/item/panel'
        ],
        function( Panel ) {
            describe('Panel Itemview', function () {

                it('should be an instance of Panel Itemview', function () {
                    var panel = new Panel();
                    expect( panel ).to.be.an.instanceOf( Panel );
                });
            });
        });

}).call( this );
