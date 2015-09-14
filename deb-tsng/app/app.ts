/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

module app {
    export var defaultTitle:string = "App Context List";

    var mainModule = angular.module("productManagement", ["ngRoute", "common.services", "productResourceMock"]);

    mainModule.config(routeConfig);

    routeConfig.$inject  = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when("/productList", {
                templateUrl: "/angsb/deb-tsng/app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .when("/productDetail/:productId", {
                templateUrl: "/angsb/deb-tsng/app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm"
            })
            .otherwise("/productList");
    }
}
