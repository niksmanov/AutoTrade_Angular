import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() public page;
  @Input() public size;
  @Output() onChildSubmit = new EventEmitter();

  public allCommons$: AllCommons;
  public vehicleMakes$: VehicleMake[];
  public vehicleModels$: VehicleModel[];

  public vehicleMakeId = null;
  public vehicleTypeId = null;
  public isSubmited: boolean = false;
  public noResults: boolean = false;

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
    this.isSubmited = true;
    this.vehicleService.clearVehiclesState();

    let formdata = new FormData(target);
    formdata.append('page', this.page);
    formdata.append('size', this.size);

    this.vehicleService.getSearchedVehicles(formdata);
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        if (!r.isLoading) {
          if (r.vehicles.length > 0) {
            this.noResults = false;
            this.onChildSubmit.emit(r.vehicles);
          } else {
            this.noResults = true;
          }
          this.isSubmited = false;
        }
      });
  }
}
