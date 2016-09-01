import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { DatasetsComponent }      from './datasets.component';
import { DatasetDetailComponent } from './dataset-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/page',
    pathMatch: 'full'
  },
  {
  path: 'page',
  component: PageComponent
  },
  {
    path: 'datasets',
    component: DatasetsComponent
  },
  {
    path: 'detail/:id',
    component: DatasetDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
