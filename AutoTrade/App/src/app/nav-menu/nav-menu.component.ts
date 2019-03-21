import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  constructor(private userService: UserService) { }

  public isAuth = false;
  public isAdmin = false;
  public user: User;

  ngOnInit() {
    this.user = this.userService.getUser();
    this.isAuth = this.userService.isAuth();
    this.isAdmin = this.isAuth && this.user.isAdmin;
  }
}
