import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
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
    InfiniteScrollModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    CommonModule,
    InfiniteScrollModule,
    ErrorComponent,
    VehicleListComponent,
  ],
})

export class SharedModule { }
