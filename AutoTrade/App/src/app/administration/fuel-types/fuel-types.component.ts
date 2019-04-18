import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Common } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-fuel-types',
  templateUrl: './fuel-types.component.html',
})
export class FuelTypesComponent implements OnInit {
  errors: string[];
  types$: Common[];

  name: string;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.commonService.getFuelTypes();
    this.store.select(fromRoot.getCommonState)
      .subscribe(r => {
        this.types$ = r.fuelTypes;
      });
  }

  addType() {
    this.http.post<ResponseModel>('/admin/addfueltype',
      {
        name: this.name,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.name = '';
          this.commonService.getFuelTypes();
        }
      })
  }

  removeType(id) {
    this.http.post<ResponseModel>('/admin/removefueltype',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.commonService.getFuelTypes();
        }
      })
  }
}
