! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body")
    };

    Dashboard.prototype.init = function () {
        _loadProductos();
        format_text_item();
    };

    var _loadProductos = function () {
        get_data({
            // url: '/json/productos.json',
            // data: null
        });
        // $.ajax({
        //     method: 'GET',
        //     data: null,
        //     dataType: 'json',
        //     url: '/json/productos.json'
        // }).done(function (data) {
        //     data.Articulos.forEach(function(element){                
        //         var source = $('#template-item').html();
        //         var template = Handlebars.compile(source);
        //         var context = element;
        //         var html = template(context);
        //         $('#lista-articulos').append(html);
        //     });
        // });
    }

    var format_text_item = function () {
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