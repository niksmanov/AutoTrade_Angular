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
  page: number = 0;
  size: number = 10;
  isLoading: boolean = false;
  serverIsLoading: boolean = false;

  vehicles$: Vehicle[];
  showVehicles: boolean = false;
  useSearch: boolean = false;
  vehiclesForm: FormData;

  constructor(
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  toggleForm() {
    this.page = 0;
    this.showVehicles = !this.showVehicles;
    if (this.showVehicles) {
      this.vehicleService.clearVehiclesState();
      this.vehicleService.getVehicles(this.page, this.size);
      this.store.select(fromRoot.getVehicleState)
        .subscribe(r => {
          this.serverIsLoading = r.isLoading;
          if (this.vehicles$ && (r.vehicles.length === this.vehicles$.length)) {
            this.isLoading = false;
          }
          this.vehicles$ = r.vehicles;
        });
    } else {
      this.useSearch = false;
    }
  }

  submitSearch(vehiclesForm: FormData) {
    this.page = 0;
    this.showVehicles = true;
    this.useSearch = true;

    this.vehiclesForm = vehiclesForm;
    this.vehicleService.clearVehiclesState();
    this.vehicleService.getSearchedVehicles(vehiclesForm);
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

    if (this.useSearch) {
      this.vehiclesForm.set('page', this.page.toString());
      this.vehicleService.getSearchedVehicles(this.vehiclesForm);
    } else {
      this.vehicleService.getVehicles(this.page, this.size);
    }
  }
}
