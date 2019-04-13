import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { VehicleListComponent } from './vehicle/components/vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    ErrorComponent,
    VehicleListComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ErrorComponent,
    VehicleListComponent,
  ],
})

export class SharedModule { }
