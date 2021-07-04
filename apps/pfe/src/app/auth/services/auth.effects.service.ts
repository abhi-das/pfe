import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from '../../store/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthEffectService {
  constructor(private _actions: Actions, private _router: Router) {}

  loginEffect = createEffect(
    () =>
      this._actions.pipe(
        ofType(AuthActions.loginAction),
        tap((rs) => {
          localStorage.setItem('user', JSON.stringify(rs));
          this._router.navigateByUrl('/transfer');
        })
      ),
    { dispatch: false }
  );

  logoutEffect = createEffect(
    () =>
      this._actions.pipe(
        ofType(AuthActions.logoutAction),
        tap((rs) => {
          localStorage.removeItem('user');
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
