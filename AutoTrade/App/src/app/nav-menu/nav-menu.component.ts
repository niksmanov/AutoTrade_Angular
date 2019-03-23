import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService) { }

  public isAuth: boolean = false;
  public isAdmin: boolean = false;

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => {
        if (user) {
          this.isAuth = user !== null;
          this.isAdmin = this.isAuth && user.isAdmin;
        }
      });
  }

  logOut() {
    this.http.get('user/logout')
      .toPromise()
      .then(r => this.router.navigateByUrl('/'));
  }
}
