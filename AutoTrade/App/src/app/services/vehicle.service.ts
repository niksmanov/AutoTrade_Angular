import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseModel } from '../app.interfaces';
import * as fromRoot from '../app.reducer';
import * as actions from '../shared/vehicle/store/vehicle.actions';

@Injectable()
export class VehicleService {
  constructor(
    private http: HttpClient,
    private store: Store<fromRoot.State>
  ) { }


  getVehicle(id = '') {
    this.http.get<ResponseModel>(
      `/vehicle/getvehicle?id=${id}`)
      .subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetVehicle(r.data)
          );
        }
      })
  }

  getVehicles(page, size, userId = '') {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('userId', userId);

    this.http.get<ResponseModel>(
      '/vehicle/getvehicles', { params })
      .subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetVehicles(r.data)
          );
        }
      })
  }

  getSearchedVehicles(form: FormData) {
    this.http.post<ResponseModel>(
      '/vehicle/searchvehicles', form)
      .subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetSearchedVehicles(r.data)
          );
        }
      })
  }

  getVehicleMakes() {
    this.http.get<ResponseModel>(
      '/vehicle/getvehiclemakes')
      .subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetVehicleMakes(r.data)
          );
        }
      })
  }

  getVehicleModels(makeId, vehicleTypeId) {
    const params = new HttpParams()
      .set('makeId', makeId)
      .set('vehicleTypeId', vehicleTypeId);

    this.http.get<ResponseModel>(
      '/vehicle/getvehiclemodels', { params })
      .subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetVehicleModels(r.data)
          );
        }
      })
  }

  clearVehiclesState() {
    this.store.dispatch(
      new actions.ClearVehiclesState()
    );
  }
}
