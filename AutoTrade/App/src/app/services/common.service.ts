import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../app.interfaces';
import * as fromRoot from '../app.reducer';
import * as actions from '../shared/common/store/common.actions';

@Injectable()
export class CommonService {
  constructor(
    private http: HttpClient,
    private store: Store<fromRoot.State>,
  ) { }


  getTowns() {
    this.http.get<ResponseModel>(
      '/common/gettowns').subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetTowns(r.data)
          );
        }
      })
  }

  getColors() {
    this.http.get<ResponseModel>(
      '/common/getcolors').subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetColors(r.data)
          );
        }
      })
  }

  getVehicleTypes() {
    this.http.get<ResponseModel>(
      '/common/getvehicletypes').subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetVehicleTypes(r.data)
          );
        }
      })
  }

  getFuelTypes() {
    this.http.get<ResponseModel>(
      '/common/getfueltypes').subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetFuelTypes(r.data)
          );
        }
      })
  }

  getGearboxTypes() {
    this.http.get<ResponseModel>(
      '/common/getgearboxtypes').subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetGearboxTypes(r.data)
          );
        }
      })
  }

  getAllCommons() {
    this.http.get<ResponseModel>(
      '/common/getallcommons').subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetAllCommons(r.data)
          );
        }
      })
  }

  getImages(vehicleId = '') {
    this.http.get<ResponseModel>(
      `/common/getimages?vehicleId=${vehicleId}`)
      .subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetImages(r.data)
          );
        }
      })
  }
}
