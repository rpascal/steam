import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fe-error',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h2><fa-icon icon="exclamation" [fixedWidth]="true"></fa-icon> Error</h2>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Sorry, an error has occurred. </p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
