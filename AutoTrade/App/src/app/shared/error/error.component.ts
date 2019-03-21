import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<div *ngIf="errors && errors.length" class="row spacer">
  <div class="col-sm-6 col-xs-12 alert alert-info">
    <p *ngFor="let err of errors">{{err}}</p>
  </div>
</div>`,
})
export class ErrorComponent {
  @Input() errors: string[];
}
