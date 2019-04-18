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
  errors: string[];
  page: number = 0;
  size: number = 10;
  isLoading: boolean = false;

  users$: User[];
  search: string;

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
        if (this.users$ && (r.users.length === this.users$.length)) {
          this.isLoading = false;
        }
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
          this.page = 0;
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
          this.page = 0;
          this.userService.clearUsersState();
          this.userService.getUsers(this.page, this.size);
        }
      })
  }

  searchUser() {
    this.page = 0;
    this.userService.clearUsersState();
    this.userService.getUsers(this.page, this.size, this.search);
  }

  onScroll() {
    this.page++;
    this.isLoading = true;
    this.userService.getUsers(this.page, this.size, this.search);
  }
}
