import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dataset } from './dataset';
import { DatasetService } from './dataset.service';

@Component({
  selector: 'my-page',
  templateUrl: 'app/page.component.html',
  styleUrls: ['app/page.component.css']
})
export class PageComponent implements OnInit {

  datasets: Dataset[] = [];

  constructor(
    private router: Router,
    private datasetService: DatasetService) {
    }

  ngOnInit(): void {
    this.datasetService.getDatasets()
      .then(datasets => this.datasets = datasets.slice(1, 5));
  }

  gotoDetail(dataset: Dataset): void {
    let link = ['/detail', dataset.id]
    this.router.navigate(link);
  }
}
