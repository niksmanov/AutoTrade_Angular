import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    ErrorComponent,
  ],
})

export class SharedModule { }
