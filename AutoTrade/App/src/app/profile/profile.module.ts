import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ContactComponent } from './contact/contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';

@NgModule({
  declarations: [
    ProfileNavigationComponent,
    ContactComponent,
    ChangePasswordComponent,
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
})

export class ProfileModule { }
