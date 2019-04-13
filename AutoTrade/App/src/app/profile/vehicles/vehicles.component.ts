import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Vehicle, User } from '../../app.interfaces';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
})
export class VehiclesComponent implements OnInit {
  public vehicles$: Vehicle[];
  public user$: User;

  public page: number = 0;
  public size: number = 10;

  constructor(
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getUserState)
      .subscribe(r => {
        this.user$ = r.user;
      });

    this.vehicleService.clearVehiclesState();
    this.vehicleService.getVehicles(this.page, this.size, this.user$.id);
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.vehicles$ = r.vehicles;
      });
  }
}
