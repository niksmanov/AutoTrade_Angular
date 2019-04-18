import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Common } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-gearbox-types',
  templateUrl: './gearbox-types.component.html',
})
export class GearboxTypesComponent implements OnInit {
  errors: string[];
  types$: Common[];

  name: string;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.commonService.getGearboxTypes();
    this.store.select(fromRoot.getCommonState)
      .subscribe(r => {
        this.types$ = r.gearboxTypes;
      });
  }

  addType() {
    this.http.post<ResponseModel>('/admin/addgearboxtype',
      {
        name: this.name,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.name = '';
          this.commonService.getGearboxTypes();
        }
      })
  }

  removeType(id) {
    this.http.post<ResponseModel>('/admin/removegearboxtype',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.commonService.getGearboxTypes();
        }
      })
  }
}
