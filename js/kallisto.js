/*jshint evil: false, bitwise:false, strict: true, undef: true, white:false, onevar:false, nomen:false, browser:true, plusplus:false */
/*global $, require*/

require.config({
    // declare capsule and libs paths
    paths: {
        //libs
        "text": "libs/text",
        "underscore": "libs/require-underscore",
        "backbone": "libs/require-backbone",

        // kallisto capsule specfic
        "capsule": "capsule/capsule",
        "router": "router/router",
        "config": "../config"
    },

    // declare dependencies
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

// open the capsule!
require(["capsule"], function(capsule) {
    capsule.initialize();
});