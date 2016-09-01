"use strict";
var router_1 = require('@angular/router');
var page_component_1 = require('./page.component');
var datasets_component_1 = require('./datasets.component');
var dataset_detail_component_1 = require('./dataset-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/page',
        pathMatch: 'full'
    },
    {
        path: 'page',
        component: page_component_1.PageComponent
    },
    {
        path: 'datasets',
        component: datasets_component_1.DatasetsComponent
    },
    {
        path: 'detail/:id',
        component: dataset_detail_component_1.DatasetDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map