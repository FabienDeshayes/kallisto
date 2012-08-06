/*jshint evil: false, bitwise:false, strict: true, undef: true, white:false, onevar:false, nomen:false, browser:true, plusplus:false */
/*global $, define, Backbone */

define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
    var CapsuleRouter = Backbone.Router.extend({

        routes: {
            "*moduleName": "loadModule" // #<module>
        },

        loadModule: function (moduleName) {
            $('#capsule-main').empty();
            $('#capsule-main').load("modules/" + moduleName + "/" + moduleName + ".html");
        }

    });

    var initialize = function() {
        var capsuleRouter = new CapsuleRouter;
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };

});