(function() {
    'use strict';

    var root = this;

    root.define([
        'models/contact'
        ],
        function( Contact ) {

            describe('Contact Model', function () {

                it('should be an instance of Contact Model', function () {
                    var contact = new Contact();
                    expect( contact ).to.be.an.instanceof( Contact );
                });

                it('should have more test written', function(){
                    expect( false ).to.be.ok;
                });
            });

        });

}).call( this );
