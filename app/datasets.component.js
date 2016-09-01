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
var dataset_service_1 = require('./dataset.service');
var DatasetsComponent = (function () {
    function DatasetsComponent(router, datasetService) {
        this.router = router;
        this.datasetService = datasetService;
    }
    DatasetsComponent.prototype.getDatasets = function () {
        var _this = this;
        this.datasetService.getDatasetsSlowly().then(function (datasets) { return _this.datasets = datasets; });
    };
    DatasetsComponent.prototype.ngOnInit = function () {
        this.getDatasets();
    };
    DatasetsComponent.prototype.onSelect = function (dataset) {
        this.selectedDataset = dataset;
    };
    DatasetsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedDataset.id]);
    };
    DatasetsComponent = __decorate([
        core_1.Component({
            selector: 'my-datasets',
            templateUrl: 'app/datasets.component.html',
            styleUrls: ['app/datasets.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, dataset_service_1.DatasetService])
    ], DatasetsComponent);
    return DatasetsComponent;
}());
exports.DatasetsComponent = DatasetsComponent;
//# sourceMappingURL=datasets.component.js.map