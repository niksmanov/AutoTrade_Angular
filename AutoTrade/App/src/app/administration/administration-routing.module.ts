import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ColorsComponent } from './colors/colors.component';
import { TownsComponent } from './towns/towns.component';
import { GearboxTypesComponent } from './gearbox-types/gearbox-types.component';
import { FuelTypesComponent } from './fuel-types/fuel-types.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { VehicleMakesComponent } from './vehicle-makes/vehicle-makes.component';
import { VehicleModelsComponent } from './vehicle-models/vehicle-models.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'towns', component: TownsComponent },
  { path: 'gearboxtypes', component: GearboxTypesComponent },
  { path: 'fueltypes', component: FuelTypesComponent },
  { path: 'vehicletypes', component: VehicleTypesComponent },
  { path: 'makes', component: VehicleMakesComponent },
  { path: 'models', component: VehicleModelsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministrationRoutingModule { }
