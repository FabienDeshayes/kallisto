/*jshint evil: false, bitwise:false, strict: true, undef: true, white:false, onevar:false, nomen:false, browser:true, plusplus:false */
/*global $, require*/

define(['jquery', 'backbone', 'router', 'text!config/kallisto.json'],
    function($, Backbone, router, config) {
        var initialize = function() {
            var capsuleConfig = JSON.parse(config);

            router.initialize();

            $('#capsule-header').append('<ul>');

            for(var i = 0; i < capsuleConfig.modules.length; i++) {
                var module = capsuleConfig.modules[i];
                $('#capsule-header').append('<li><a href="#' + module.name + '">' + module.label + '</a></li>');
            }

            $('#capsule-header').append('</ul>');
        }

        return {
            initialize: initialize
        };
    }
);