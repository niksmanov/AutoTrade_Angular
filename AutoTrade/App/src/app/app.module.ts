//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

//Components
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
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
    SearchFormComponent,
    SearchResultsComponent,
    VehicleComponent,
    MainNavigationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    SlideshowModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [UserService, VehicleService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
