import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ContactComponent } from './contact/contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    ContactComponent,
    ChangePasswordComponent,
    NavigationComponent,
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule,
  ],
})

export class ProfileModule { }
