import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Common } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
})
export class TownsComponent implements OnInit {
  public errors: string[];
  public towns$: Common[];

  public name: string;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.commonService.getTowns();
    this.store.select(fromRoot.getCommonState)
      .subscribe(r => {
        this.towns$ = r.towns;
      });
  }

  addTown() {
    this.http.post<ResponseModel>('/admin/addtown',
      {
        name: this.name,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.name = '';
          this.commonService.getTowns();
        } 
      })
  }

  removeTown(id) {
    this.http.post<ResponseModel>('/admin/removetown',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.commonService.getTowns();
        } 
      })
  }
}
