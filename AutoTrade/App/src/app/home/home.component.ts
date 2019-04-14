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
  public vehicles$: Vehicle[];

  public page: number = 0;
  public size: number = 10;

  constructor(
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.vehicleService.clearVehiclesState();
    this.vehicleService.getVehicles(this.page, this.size);
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.vehicles$ = r.vehicles;
      });
  }
}
