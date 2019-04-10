import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';


const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'addvehicle', component: AddVehicleComponent },
  { path: 'editvehicle/:id', component: EditVehicleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
