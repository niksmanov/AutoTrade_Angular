import { Component, OnInit, AfterContentChecked, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, AllCommons, VehicleMake, Vehicle, VehicleModel, User } from '../../../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app.reducer';
import { CommonService } from '../../../../services/common.service';
import { VehicleService } from '../../../../services/vehicle.service';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
})
export class VehicleFormComponent implements OnInit, AfterContentChecked {
  @Input() vehicle: Vehicle;
  @Input() isSubmited: boolean;
  @Output() onChildSubmit = new EventEmitter();

  public errors: string[];
  public allCommons$: AllCommons;
  public vehicleMakes$: VehicleMake[];
  public vehicleModels$: VehicleModel[];

  public user$: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private commonService: CommonService,
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getUserState)
      .subscribe(r => {
        this.user$ = r.user;
      });

    this.vehicleService.getVehicleMakes();
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.vehicleMakes$ = r.vehicleMakes;
      });

    this.commonService.getAllCommons();
    this.store.select(fromRoot.getCommonState)
      .subscribe(r => {
        this.allCommons$ = r.allCommons;
      });
  }

  ngAfterContentChecked() {
    if (this.vehicle) {
      this.initMakes();
    }
  }

  initMakes() {
    if (this.vehicle.makeId > 0 && this.vehicle.typeId > 0) {
      this.vehicleService.getVehicleModels(this.vehicle.makeId, this.vehicle.typeId);
      this.store.select(fromRoot.getVehicleState)
        .subscribe(r => {
          this.vehicleModels$ = r.vehicleModels;
        });
    } else {
      this.vehicleModels$ = [];
    }
  }

  removeVehicle(id) {
    this.isSubmited = true;
    this.http.post<ResponseModel>('/profile/removevehicle',
      {
        id: id
      }).subscribe(r => {
        if (r.succeeded) {
          this.router.navigateByUrl('/profile/vehicles');
        } else {
          this.errors = r.errors;
          this.isSubmited = false;
        }
      })
  }

  onSubmit(target) {
    this.isSubmited = true;
    this.onChildSubmit.emit(new FormData(target));
  }
}
