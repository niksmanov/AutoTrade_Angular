import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseModel, User } from '../app.interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<ResponseModel>(
      '/user/current').pipe(
        map(r => {
          if (r.succeeded) {
            return r.data;
          }
        }))
  }

  getUsers(page, size, search = ''): Observable<User[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('search', search);

    return this.http.get<ResponseModel>(
      '/admin/getusers', { params }).pipe(
        map(r => {
          if (r.succeeded) {
            return r.data;
          }
        }))
  }
}
