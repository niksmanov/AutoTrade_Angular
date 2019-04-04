import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';


@NgModule({
  declarations: [
    AdminNavigationComponent,
    UsersComponent,
  ],
  imports: [
    SharedModule,
    AdministrationRoutingModule,
  ],
})

export class AdministrationModule { }
