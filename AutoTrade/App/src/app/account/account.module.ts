import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from '../shared/error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountRoutingModule } from './account-routing.module';


@NgModule({
  declarations: [
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AccountRoutingModule
  ],
})

export class AccountModule { }
