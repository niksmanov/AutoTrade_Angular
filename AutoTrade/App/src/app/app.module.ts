import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Shared
import { ErrorComponent } from './shared/error/error.component';

//Services
import { UserService } from './services/user.service';
import { VehicleService } from './services/vehicle.service';
import { CommonService } from './services/common.service';


//Account
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ErrorComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //StoreModule.forRoot(reducers),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: RegisterComponent, canActivate: [AuthGuard] },

      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [AuthGuard, UserService, VehicleService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
