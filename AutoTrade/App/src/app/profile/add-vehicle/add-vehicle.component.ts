import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Vehicle, User } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
})
export class AddVehicleComponent implements OnInit {
  errors: string[];
  vehicle$: Vehicle;
  isSubmited: boolean = false;

  user$: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getUserState)
      .subscribe(r => {
        this.user$ = r.user;
      });

    this.vehicleService.getVehicle();
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        this.vehicle$ = r.vehicle;
      });
  }

  onSubmit(vehicle: FormData) {
    vehicle.append('userId', this.user$.id);
    this.http.post<ResponseModel>('/profile/addvehicle', vehicle)
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
