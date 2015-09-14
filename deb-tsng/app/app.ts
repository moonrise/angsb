/// <reference path="../typings/angularjs/angular.d.ts" />

module app {
    angular.module("productManagement", ["common.services", "productResourceMock"]);
    export var defaultTitle:string = "App Context List";
}
