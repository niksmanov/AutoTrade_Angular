import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { UsersComponent } from './users/users.component';
import { ColorsComponent } from './colors/colors.component';


@NgModule({
  declarations: [
    AdminNavigationComponent,
    UsersComponent,
    ColorsComponent,
  ],
  imports: [
    SharedModule,
    AdministrationRoutingModule,
  ],
})

export class AdministrationModule { }
