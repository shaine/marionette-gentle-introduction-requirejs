(function() {
    'use strict';

    var root = this;

    root.define([
            'views/layout/contact-list'
        ],
        function( ContactList ) {
            describe('ContactList Layout', function () {

                it('should be an instance of ContactList Layout', function () {
                    var contactList = new ContactList();
                    expect( contactList ).to.be.an.instanceOf( ContactList );
                });
            });
        });

}).call( this );
