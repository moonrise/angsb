/// <reference path="../../typings/requirejs/require.d.ts" />
require.config({
    baseUrl: "tsfund",
    shim: {
        jquery: {
            exports: '$'
        }
    },
    paths: {
        'jquery': '../../app/bower_components/jquery/jquery',
        'toastr': '../../app/bower_components/toastr/toastr'
    }
});
//require(['amdmod1', 'jquery', 'toastr'], (main, $, toastr) => main.run());
require(['jquery', 'toastr', 'amdmod1'], function ($, toastr, main) { return main.run(); });
//# sourceMappingURL=config.js.map