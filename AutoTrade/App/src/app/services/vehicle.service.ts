import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseModel, Vehicle, VehicleMake, VehicleModel } from '../app.interfaces';

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) { }

  private vehicle: Vehicle;
  private vehicles: Vehicle[];
  private vehicleMakes: VehicleMake[];
  private vehicleModels: VehicleModel[];


  getVehicle(id = ''): Vehicle {
    this.http.get<ResponseModel>(
      `/vehicle/getvehicle?id=${id}`)
      .subscribe(r => {
        if (r.succeeded) {
          this.vehicle = r.data;
        }
      })
    return this.vehicle;
  }

  getVehicles(page, size, userId = ''): Vehicle[] {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('userId', userId);

    this.http.get<ResponseModel>(
      '/vehicle/getvehicles', { params })
      .subscribe(r => {
        if (r.succeeded) {
          this.vehicles = r.data;
        }
      })
    return this.vehicles;
  }

  getSearchedVehicles(form): Vehicle[] {
    this.http.post<ResponseModel>(
      '/vehicle/searchvehicles', form)
      .subscribe(r => {
        if (r.succeeded) {
          this.vehicles = r.data;
        }
      })
    return this.vehicles;
  }

  getVehicleMakes(): VehicleMake[] {
    this.http.get<ResponseModel>(
      '/vehicle/getvehiclemakes')
      .subscribe(r => {
        if (r.succeeded) {
          this.vehicleMakes = r.data;
        }
      })
    return this.vehicleMakes;
  }

  getVehicleModels(makeId, vehicleTypeId): VehicleModel[] {
    const params = new HttpParams()
      .set('makeId', makeId)
      .set('vehicleTypeId', vehicleTypeId);

    this.http.get<ResponseModel>(
      '/vehicle/getvehiclemakes', { params })
      .subscribe(r => {
        if (r.succeeded) {
          this.vehicleModels = r.data;
        }
      })
    return this.vehicleModels;
  }
}
