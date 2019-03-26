import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import * as fromRoot from '../app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private store: Store<fromRoot.State>,
  ) { }

  public isAuth$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    this.isAdmin$ = this.store.select(fromRoot.getIsAdmin);
  }

  logOut() {
    this.http.get('user/logout')
      .toPromise()
      .then(r => window.location.href = '/');
  }
}
