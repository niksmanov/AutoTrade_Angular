import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseModel } from '../app.interfaces';
import * as fromRoot from '../app.reducer';
import * as actions from '../shared/user/store/user.actions';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private store: Store<fromRoot.State>,
  ) { }


  getUser() {
    this.http.get<ResponseModel>(
      '/user/current').subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetUser(r.data)
          );
        }
      })
  }

  getUsers(page, size, search = '') {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('search', search);

    return this.http.get<ResponseModel>(
      '/admin/getusers', { params })
      .subscribe(r => {
        if (r.succeeded) {
          this.store.dispatch(
            new actions.GetUsers(r.data)
          );
        }
      })
  }

  clearUsersState() {
    this.store.dispatch(
      new actions.ClearUsersState()
    );
  }
}
