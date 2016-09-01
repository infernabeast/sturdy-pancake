"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dataset_1 = require('./dataset');
var dataset_service_1 = require('./dataset.service');
var DatasetDetailComponent = (function () {
    function DatasetDetailComponent(datasetService, route) {
        this.datasetService = datasetService;
        this.route = route;
    }
    DatasetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.datasetService.getDataset(id)
                .then(function (dataset) { return _this.dataset = dataset; });
        });
    };
    DatasetDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dataset_1.Dataset)
    ], DatasetDetailComponent.prototype, "dataset", void 0);
    DatasetDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-dataset-detail',
            templateUrl: 'app/dataset-detail.component.html',
            styleUrls: ['app/dataset-detail.component.css']
        }), 
        __metadata('design:paramtypes', [dataset_service_1.DatasetService, router_1.ActivatedRoute])
    ], DatasetDetailComponent);
    return DatasetDetailComponent;
}());
exports.DatasetDetailComponent = DatasetDetailComponent;
//# sourceMappingURL=dataset-detail.component.js.map