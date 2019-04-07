import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Common } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-vehicle-types',
  templateUrl: './vehicle-types.component.html',
})
export class VehicleTypesComponent implements OnInit {
  public errors: string[];
  public types$: Common[];

  public name: string;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.commonService.getVehicleTypes();
    this.store.select(fromRoot.getCommonState)
      .subscribe(r => {
        this.types$ = r.vehicleTypes;
      });
  }

  addType() {
    this.http.post<ResponseModel>('/admin/addvehicletype',
      {
        name: this.name,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.name = '';
          this.commonService.getVehicleTypes();
        } 
      })
  }

  removeType(id) {
    this.http.post<ResponseModel>('/admin/removevehicletype',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.commonService.getVehicleTypes();
        } 
      })
  }
}
