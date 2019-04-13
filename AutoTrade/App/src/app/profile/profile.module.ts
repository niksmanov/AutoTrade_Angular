import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ContactsComponent } from './contacts/contacts.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { VehicleFormComponent } from '../shared/vehicle/components/vehicle-form/vehicle-form.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    ProfileNavigationComponent,
    VehicleFormComponent,
    ContactsComponent,
    ChangePasswordComponent,
    AddVehicleComponent,
    EditVehicleComponent,
    VehiclesComponent,
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
})

export class ProfileModule { }
