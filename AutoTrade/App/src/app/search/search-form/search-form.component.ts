import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehicleMake, VehicleModel, AllCommons } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { VehicleService } from '../../services/vehicle.service';
import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent implements OnInit {
  @Output() onChildSubmit = new EventEmitter();

  public allCommons$: AllCommons;
  public vehicleMakes$: VehicleMake[];
  public vehicleModels$: VehicleModel[];

  public vehicleMakeId = null;
  public vehicleTypeId = null;

  constructor(
    private vehicleService: VehicleService,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
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

  initMakes() {
    if (this.vehicleMakeId > 0 && this.vehicleTypeId > 0) {
      this.vehicleService.getVehicleModels(this.vehicleMakeId, this.vehicleTypeId);
      this.store.select(fromRoot.getVehicleState)
        .subscribe(r => {
          this.vehicleModels$ = r.vehicleModels;
        });
    } else {
      this.vehicleModels$ = [];
    }
  }

  onSubmit(target) {
    let formdata = new FormData(target);
    formdata.append('page', '0');
    formdata.append('size', '10');

    this.onChildSubmit.emit(formdata);
  }
}
