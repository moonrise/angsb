(function () {

    // app bootstrap
    var appModule = angular.module("appModule", ["ngRoute"]);

    appModule.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "mainCtrl"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "userCtrl"
            })
            .otherwise({redirectTo: "/main"});
    });

}());