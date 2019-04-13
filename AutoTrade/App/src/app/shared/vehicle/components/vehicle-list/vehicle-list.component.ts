import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../../app.interfaces';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})

export class VehicleListComponent {
  @Input() vehicles: Vehicle[];
}
