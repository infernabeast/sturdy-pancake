import { Injectable } from '@angular/core';

import { Dataset } from './dataset';
import { DATASETS } from './mock-datasets';

@Injectable()
export class DatasetService {
  getDatasets(): Promise<Dataset[]> {
    return Promise.resolve(DATASETS);
  }

  getDatasetsSlowly(): Promise<Dataset[]> {
  return new Promise<Dataset[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getDatasets());
  }

  getDataset(id: number): Promise<Dataset> {
    return this.getDatasets()
        .then(datasets => datasets.find(dataset => dataset.id === id));
  }

}
