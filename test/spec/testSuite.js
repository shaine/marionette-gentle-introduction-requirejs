define(function() {
    'use strict';

    /* return an array of specs to be run */
    return {
        specs: [
            'spec/collections/contact.js',
            'spec/controllers/contact.js',
            'spec/controllers/edit/contact.js',
            'spec/models/contact.js',
            'spec/routers/router.js',
            'spec/test-suite.js',
            'spec/views/composite/contact.js',
            'spec/views/home.js',
            'spec/views/item/contact-missing.js',
            'spec/views/item/contact.js',
            'spec/views/item/edit/contact.js',
            'spec/views/loading.js'
        ]
    };
});
