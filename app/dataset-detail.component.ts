import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Dataset } from './dataset';
import { DatasetService } from './dataset.service';

@Component({
  selector: 'my-dataset-detail',
  templateUrl: 'app/dataset-detail.component.html',
  styleUrls: ['app/dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {
  @Input()
  dataset: Dataset;

  constructor(
  private datasetService: DatasetService,
  private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.datasetService.getDataset(id)
        .then(dataset => this.dataset = dataset);
    });
  }

  goBack(): void {
    window.history.back();
  }

}
