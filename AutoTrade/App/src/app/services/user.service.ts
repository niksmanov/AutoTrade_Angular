import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseModel, User } from '../app.interfaces';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  private user: User = null;
  private users: User[];

  getUser(): User {
    this.http.get<ResponseModel>(
      '/user/current')
      .subscribe(r => {
        if (r.succeeded) {
          this.user = r.data;
        }
      })
    return this.user;
  }

  getUsers(page, size, search = ''): User[] {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('search', search);

    this.http.get<ResponseModel>(
      '/admin/getusers', { params })
      .subscribe(r => {
        if (r.succeeded) {
          this.users = r.data;
        }
      })
    return this.users;
  }

  isAuth() {
    return this.user !== null;
  }
}
