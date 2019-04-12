//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

//Components
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { VehicleComponent } from './shared/vehicle/components/vehicle/vehicle.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Services
import { UserService } from './services/user.service';
import { VehicleService } from './services/vehicle.service';
import { CommonService } from './services/common.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    VehicleComponent,
    MainNavigationComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [UserService, VehicleService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
