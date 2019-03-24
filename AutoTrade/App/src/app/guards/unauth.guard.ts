import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromRoot from '../app.reducer';

@Injectable()
export class UnAuthGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.select(fromRoot.getIsAuth).pipe(take(1))
      .subscribe(isAuth => {
        if (isAuth) {
          this.router.navigateByUrl('/');
        }
      })
    return true;
  }
}
