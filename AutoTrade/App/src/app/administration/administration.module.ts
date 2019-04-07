import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { UsersComponent } from './users/users.component';
import { ColorsComponent } from './colors/colors.component';
import { TownsComponent } from './towns/towns.component';
import { GearboxTypesComponent } from './gearbox-types/gearbox-types.component';
import { FuelTypesComponent } from './fuel-types/fuel-types.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { VehicleMakesComponent } from './vehicle-makes/vehicle-makes.component';
import { VehicleModelsComponent } from './vehicle-models/vehicle-models.component';


@NgModule({
  declarations: [
    AdminNavigationComponent,
    UsersComponent,
    ColorsComponent,
    TownsComponent,
    GearboxTypesComponent,
    FuelTypesComponent,
    VehicleTypesComponent,
    VehicleMakesComponent,
    VehicleModelsComponent,
  ],
  imports: [
    SharedModule,
    AdministrationRoutingModule,
  ],
})

export class AdministrationModule { }
