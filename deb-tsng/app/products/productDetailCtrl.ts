/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

/// <reference path="product.ts" />
/// <reference path="../common/services/common.services.ts" />
/// <reference path="../common/services/dataAccessService.ts" />

module app.productDetail {
    interface IProductDetailModel {
        title: string;
        product: app.domain.IProduct;
    }

    interface IProductParams extends ng.route.IRouteParamsService {
        productId; number;
    }

    class ProductDetailCtrl implements IProductDetailModel {
        title:string;
        product:app.domain.IProduct;

        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams:IProductParams, private dataAccessService:app.common.DataAccessService) {
            this.title = "Product Detail";

            var productResource = dataAccessService.getProductResource();
            productResource.get(
                {productId: $routeParams.productId},
                (data:app.domain.IProduct) => {
                    this.product = data;
                });
        }
    }

    angular.module("productManagement").controller("ProductDetailCtrl", ProductDetailCtrl);
}