import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/page" routerLinkActive="active">Page</a>
      <a routerLink="/datasets" routerLinkActive="active">Datasets</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Insights';
}
