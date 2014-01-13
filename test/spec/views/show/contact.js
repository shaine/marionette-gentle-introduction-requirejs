(function() {
    'use strict';

    var root = this;

    root.define([
            'views/show/contact'
        ],
        function( ContactItemView ) {

            describe('ContactItemView Itemview', function () {

                it('should be an instance of ContactItemView Itemview', function () {
                    var contactItemView = new ContactItemView();
                    expect( contactItemView ).to.be.an.instanceOf( ContactItemView );
                });
            });

        });

}).call( this );
