(function() {
    'use strict';

    var root = this;

    root.define([
            'views/edit/contact',
            'models/contact'
        ],
        function( EditContact, Contact ) {
            describe('EditContact Itemview', function () {

                it('should be an instance of EditContact Itemview', function () {
                    var contact = new Contact({
                        firstName: 'Foo',
                        lastName: 'Bar',
                        phoneNumber: '0000000000'
                    });
                    var editContact = new EditContact({
                        model: contact
                    });
                    expect( editContact ).to.be.an.instanceOf( EditContact );
                });
            });
        });

}).call( this );
