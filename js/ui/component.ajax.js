(function ($) {
    $.ruta_datos = {
        // tipo: null,
        url: null,
        data: null,
        callback: null,

        _init: function (type, data, url, callback) {
            console.log(type)
            console.log(data)
            console.log(url)
            console.log(callback)
        }
    }


    get_data = function (config, callback) {
        if (!config.data) config.data = null;
        if (!config.url) $.NotificationApp.send("Error!", "URL no definida para la consulta", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
        if (!callback) callback = false;


        $.ruta_datos._init('get', config.data, config.url, callback);
    }

})(jQuery);