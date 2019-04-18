import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, VehicleMake } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-makes',
  templateUrl: './vehicle-makes.component.html',
})
export class VehicleMakesComponent implements OnInit {
  errors: string[];
  makes$: VehicleMake[];

  name: string;

  constructor(
    private http: HttpClient,
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.vehicleService.getVehicleMakes();
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.makes$ = r.vehicleMakes;
      });
  }

  addMake() {
    this.http.post<ResponseModel>('/admin/addvehiclemake',
      {
        name: this.name,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.name = '';
          this.vehicleService.getVehicleMakes();
        }
      })
  }

  removeMake(id) {
    this.http.post<ResponseModel>('/admin/removevehiclemake',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.vehicleService.getVehicleMakes();
        }
      })
  }
}
