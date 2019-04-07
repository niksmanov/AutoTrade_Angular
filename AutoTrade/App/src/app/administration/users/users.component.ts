import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, User } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})


export class UsersComponent implements OnInit {
  public errors: string[];
  public page: number = 0;
  public size: number = 10;

  public users$: User[];
  public search: string;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.userService.clearUsersState();
    this.userService.getUsers(this.page, this.size);
    this.store.select(fromRoot.getUserState)
      .subscribe(r => {
        this.users$ = r.users;
      });
  }


  changeRole(id, isAdmin) {
    this.http.post<ResponseModel>('/admin/changerole',
      {
        id: id,
        isAdmin: !isAdmin,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.userService.clearUsersState();
          this.userService.getUsers(this.page, this.size);
        }
      })
  }

  removeUser(id) {
    this.http.post<ResponseModel>('/admin/removeuser',
      {
        id: id,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          this.userService.clearUsersState();
          this.userService.getUsers(this.page, this.size);
        }
      })
  }

  searchUser() {
    this.userService.clearUsersState();
    this.userService.getUsers(this.page, this.size, this.search);
  }
}
