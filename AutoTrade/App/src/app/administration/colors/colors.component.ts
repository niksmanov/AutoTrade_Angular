import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Common } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
})
export class ColorsComponent implements OnInit {
  public errors: string[];
  public colors$: Common[];

  public name: string;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.commonService.getColors();
    this.store.select(fromRoot.getCommonState)
      .subscribe(r => {
        this.colors$ = r.colors;
      });
  }

  addColor() {
    this.http.post<ResponseModel>('/admin/addcolor',
      {
        name: this.name,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.name = '';
          this.commonService.getColors();
        } 
      })
  }

  deleteColor(id) {
    this.http.post<ResponseModel>('/admin/removecolor',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.commonService.getColors();
        } 
      })
  }
}
