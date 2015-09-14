/// <reference path="../../typings/angularjs/angular.d.ts" />

/// <reference path="product.ts" />
/// <reference path="../common/services/common.services.ts" />
/// <reference path="../common/services/dataAccessService.ts" />

import product = app.domain;

module app {
    module productList {
        interface IProductListModel {
            title: string;
            showImage: boolean;
            products: app.domain.IProduct[];
            //toggleImage(): void;
            toggleImage: () => void;
        }

        class ProductListCtrl implements IProductListModel {
            title:string;
            showImage:boolean;
            products:product.IProduct[];

            static $inject=["dataAccessService"];
            constructor(private dataAccessService: app.common.DataAccessService) {
                this.title = "Product List";
                this.showImage = false;
                this.products = [];

                var productResource = dataAccessService.getProductResource();
                productResource.query((data: app.domain.IProduct[]) => {
                    this.products = data;
                });
            }

            toggleImage():void {
                this.showImage = !this.showImage;
            }
        }

        angular.module("productManagement").controller("ProductListCtrl", ProductListCtrl);
    }
}
