import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'colors', component: ColorsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministrationRoutingModule { }
