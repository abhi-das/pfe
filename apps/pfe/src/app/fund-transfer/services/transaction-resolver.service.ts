import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { noop, Observable } from 'rxjs';
import { finalize, first, tap } from 'rxjs/operators';
import { TransferActions } from '../../store/actions';
import { appStore } from '../../store/reducers';

@Injectable({
  providedIn: 'root',
})
export class TransactionResolverService implements Resolve<any> {
  isLoading = false;
  constructor(private _store: Store<appStore.AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._store.pipe(
      tap(() => {
        if (!this.isLoading) {
          this.isLoading = true;
          this._store.dispatch(TransferActions.loadTransactionHistory());
        }
      }),
      first(),
      finalize(() => (this.isLoading = false))
    );
  }
}
