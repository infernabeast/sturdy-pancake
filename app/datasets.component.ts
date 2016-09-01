import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dataset } from './dataset';
import { DatasetService } from './dataset.service';

@Component({
  selector: 'my-datasets',
  templateUrl: 'app/datasets.component.html',
  styleUrls: ['app/datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  datasets: Dataset[];
  selectedDataset: Dataset;

  constructor(
    private router: Router,
    private datasetService: DatasetService) {
    }

  getDatasets(): void {
    this.datasetService.getDatasetsSlowly().then(datasets => this.datasets = datasets);
  }

  ngOnInit(): void {
    this.getDatasets();
  }

  onSelect(dataset: Dataset): void {
    this.selectedDataset = dataset;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDataset.id]);
  }

}
