import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';
import { AdminGuard } from './guards/admin.guard';

import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VehicleComponent } from './shared/vehicle/components/vehicle/vehicle.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', loadChildren: './account/account.module#AccountModule', canActivate: [UnAuthGuard] },
  { path: 'search', component: SearchFormComponent },
  { path: 'vehicle/:id', component: VehicleComponent },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './administration/administration.module#AdministrationModule', canActivate: [AdminGuard] },

  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, UnAuthGuard, AdminGuard],
})
export class AppRoutingModule { }
