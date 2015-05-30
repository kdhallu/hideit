if(typeof $){
    alert('jquery not found please add jquery and use the plugin')
}
hideitObj = (function($){
    "use strict";
    var hideit = {
        /* Contstructor */
        init: function () {

        },
        getBrowserName: function () {
            return "browser name"
        },
        getVersion: function () {
            return "1.0"
        }
    }

    return hideit;

})($);

hideitObj.init();