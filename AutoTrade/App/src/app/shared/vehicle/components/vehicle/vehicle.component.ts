import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as fromRoot from '../../../../app.reducer';
import { Vehicle, User } from '../../../../app.interfaces';
import { VehicleService } from '../../../../services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicle$: Vehicle;
  public user$: User;
  public imageSources: string[];

  constructor(
    private vehicleService: VehicleService,
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getUserState)
      .subscribe(r => {
        this.user$ = r.user;
      });

    this.vehicleService.getVehicle(this.route.snapshot.params.id);
    this.store.select(fromRoot.getVehicleState)
      .subscribe(r => {
        if (r.vehicle) {
          this.vehicle$ = r.vehicle;
          this.vehicle$.productionDate = r.vehicle.displayDate;
          this.imageSources = r.vehicle.images.map(x => x.url);
        }
      });
  }
}
