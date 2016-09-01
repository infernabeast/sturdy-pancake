import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { PageComponent } from './page.component';
import { DatasetDetailComponent } from './dataset-detail.component';
import { DatasetsComponent }     from './datasets.component';
import { DatasetService }         from './dataset.service';
import { routing } from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    PageComponent,
    DatasetDetailComponent,
    DatasetsComponent
  ],
  providers: [
    DatasetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
