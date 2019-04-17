import { Component } from '@angular/core';
import { Vehicle } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})


export class SearchResultsComponent {
  public page: number = 0;
  public size: number = 10;

  public showVehicles: boolean = false;
  public vehicles$: Vehicle[];

  constructor(
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  toggleForm() {
    this.showVehicles = !this.showVehicles;
    if (this.showVehicles) {
      this.vehicleService.clearVehiclesState();
      this.vehicleService.getVehicles(this.page, this.size);
      this.store.select(fromRoot.getVehicleState)
        .subscribe(r => {
          this.vehicles$ = r.vehicles;
        });
    }
  }

  showResults(vehiclesForm: FormData) {
    this.showVehicles = true;
    this.vehicleService.clearVehiclesState();
    this.vehicleService.getSearchedVehicles(vehiclesForm);
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.vehicles$ = r.vehicles;
      });
  }
}
