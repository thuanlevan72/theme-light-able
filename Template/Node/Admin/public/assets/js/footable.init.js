/*
Template Name: Fadmin - Responsive Bootstrap Admin Dashboard
Author: ThemesBoss
File: Main Js File
*/


! function($) {
    "use strict";

    var footable = function() {};

	    footable.prototype.initFooTable = function() {
	        $('#footable_1').footable({
                "sorting": {
                    "enabled": true
                }
            });
	    },

        footable.prototype.init = function() {
            this.initFooTable();
        },

        //init
        $.footable = new footable, $.footable.Constructor = footable
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.footable.init();
}(window.jQuery);
