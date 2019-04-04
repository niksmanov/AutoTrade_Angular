import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromRoot from '../app.reducer';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.select(fromRoot.getIsAdmin).pipe(take(1))
      .subscribe(isAdmin => {
        if (!isAdmin) {
          this.router.navigateByUrl('/');
        }
      })
    return true;
  }
}
