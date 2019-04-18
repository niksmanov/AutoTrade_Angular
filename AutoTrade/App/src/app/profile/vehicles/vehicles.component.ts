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
  vehicles$: Vehicle[];
  user$: User;

  page: number = 0;
  size: number = 10;
  isLoading: boolean = false;
  serverIsLoading: boolean = false;

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
        this.serverIsLoading = r.isLoading;
        if (this.vehicles$ && (r.vehicles.length === this.vehicles$.length)) {
          this.isLoading = false;
        }
        this.vehicles$ = r.vehicles;
      });
  }

  onScroll() {
    this.page++;
    this.isLoading = true;
    this.vehicleService.getVehicles(this.page, this.size, this.user$.id);
  }
}
