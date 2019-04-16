/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Dashboard
 */

! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body"),
            this.charts = []
    };

    Dashboard.prototype.init = function () {
        formatText_item();
    };

    var formatText_item = function () {
        var p = $('.item-text p');
        var ks = $('.item-text').height();
        while ($(p).outerHeight() > ks) {
            $(p).text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    }

    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard;

}(window.jQuery),

    function ($) {
        "use strict";
        $.Dashboard.init()

    }(window.jQuery);