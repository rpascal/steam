import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fe-page-not-found',
  template: `
  <mat-card>
    <mat-card-header>
      <mat-card-title><h2>Not Found</h2></mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p>Sorry, we couldn't find what you are looking for.</p>
    </mat-card-content>
  </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
