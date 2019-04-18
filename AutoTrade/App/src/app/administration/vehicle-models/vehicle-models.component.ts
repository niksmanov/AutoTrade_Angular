import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, VehicleModel, VehicleMake, Common } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { VehicleService } from '../../services/vehicle.service';
import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-vehicle-models',
  templateUrl: './vehicle-models.component.html',
})
export class VehicleModelsComponent implements OnInit {
  errors: string[];
  makes$: VehicleMake[];
  models$: VehicleModel[];
  types$: Common[];

  name: string;
  makeId: number = 0;
  typeId: number = 0;

  constructor(
    private http: HttpClient,
    private vehicleService: VehicleService,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.vehicleService.getVehicleMakes();
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.makes$ = r.vehicleMakes;
      });

    this.commonService.getVehicleTypes();
    this.store.select(fromRoot.getCommonState)
      .subscribe(r => {
        this.types$ = r.vehicleTypes;
      });
  }

  selectType() {
    if (this.makeId > 0) {
      this.vehicleService.getVehicleModels(this.makeId, this.typeId);
      this.store.select(fromRoot.getVehicleState)
        .subscribe(r => {
          this.models$ = r.vehicleModels;
        });
    }
  }

  addModel() {
    this.http.post<ResponseModel>('/admin/addvehiclemodel',
      {
        name: this.name,
        makeId: this.makeId,
        vehicleTypeId: this.typeId,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.name = '';
          this.vehicleService.getVehicleModels(this.makeId, this.typeId);
        }
      })
  }

  removeModel(id) {
    this.http.post<ResponseModel>('/admin/removevehiclemodel',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.vehicleService.getVehicleModels(this.makeId, this.typeId);
        }
      })
  }
}
