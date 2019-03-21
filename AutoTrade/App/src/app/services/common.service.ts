import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseModel, Common, AllCommons, Image } from '../app.interfaces';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) { }

  private allCommons: AllCommons;
  private towns: Common[];
  private colors: Common[];
  private vehicleTypes: Common[];
  private gearboxTypes: Common[];
  private fuelTypes: Common[];
  private images: Image[];


  getTowns(): Common[] {
    this.http.get<ResponseModel>(
      '/common/gettowns')
      .subscribe(r => {
        if (r.succeeded) {
          this.towns = r.data;
        }
      })
    return this.towns;
  }


  getColors(): Common[] {
    this.http.get<ResponseModel>(
      '/common/getcolors')
      .subscribe(r => {
        if (r.succeeded) {
          this.colors = r.data;
        }
      })
    return this.colors;
  }

  getVehicleTypes(): Common[] {
    this.http.get<ResponseModel>(
      '/common/getvehicletypes')
      .subscribe(r => {
        if (r.succeeded) {
          this.vehicleTypes = r.data;
        }
      })
    return this.vehicleTypes;
  }

  getFuelTypes(): Common[] {
    this.http.get<ResponseModel>(
      '/common/getfueltypes')
      .subscribe(r => {
        if (r.succeeded) {
          this.fuelTypes = r.data;
        }
      })
    return this.fuelTypes;
  }

  getGearboxTypes(): Common[] {
    this.http.get<ResponseModel>(
      '/common/getgearboxtypes')
      .subscribe(r => {
        if (r.succeeded) {
          this.gearboxTypes = r.data;
        }
      })
    return this.gearboxTypes;
  }

  getAllCommons(): AllCommons {
    this.http.get<ResponseModel>(
      '/common/getallcommons')
      .subscribe(r => {
        if (r.succeeded) {
          this.allCommons = r.data;
        }
      })
    return this.allCommons;
  }

  getImages(vehicleId = ''): Image[] {
    this.http.get<ResponseModel>(
      `/common/getimages?vehicleId=${vehicleId}`)
      .subscribe(r => {
        if (r.succeeded) {
          this.images = r.data;
        }
      })
    return this.images;
  }
}
