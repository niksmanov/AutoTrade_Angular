import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Vehicle } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
})
export class EditVehicleComponent implements OnInit {
  public errors: string[];
  public vehicle$: Vehicle;
  public isSubmited: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.vehicleService.getVehicle(this.route.snapshot.params.id);
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        if (r.vehicle) {
          this.vehicle$ = r.vehicle;
          this.vehicle$.productionDate = r.vehicle.displayDate;
        }
      });
  }

  onSubmit(vehicle: FormData) {
    vehicle.append('id', this.vehicle$.id);
    vehicle.append('userId', this.vehicle$.userId);
    this.http.post<ResponseModel>('/profile/editvehicle', vehicle)
      .subscribe(r => {
        if (r.succeeded) {
          this.router.navigateByUrl(`/vehicle/${r.data}`);
        } else {
          this.errors = r.errors;
          this.isSubmited = false;
        }
      })
  }
}
