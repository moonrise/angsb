/// <reference path="../../typings/requirejs/require.d.ts" />

require.config({
    baseUrl: "tsfund"
});

require(['amdmod1'], (main) => main.run());
