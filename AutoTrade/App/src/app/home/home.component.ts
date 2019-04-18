import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import { Vehicle } from '../app.interfaces';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  vehicles$: Vehicle[];
  serverIsLoading: boolean = false;

  constructor(
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.vehicleService.clearVehiclesState();
    this.vehicleService.getVehicles(0, 10);
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.serverIsLoading = r.isLoading;
        this.vehicles$ = r.vehicles;
      });
  }
}
