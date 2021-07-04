import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { TransferActions } from '../../store/actions';
import { appStore } from '../../store/reducers';
import { hasTransactionListLoaded } from '../../store/selectors/transaction.selectors';

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
      select(hasTransactionListLoaded),
      tap((hasListLoaded) => {
        if (!this.isLoading && !hasListLoaded) {
          this.isLoading = true;
          this._store.dispatch(TransferActions.loadTransactionHistory());
        }
      }),
      filter((hasListLoaded) => {
        if (!hasListLoaded) {
          this._store.dispatch(
            TransferActions.loadTransactionHistoryFailure({
              transactionError: 'Error on loading history!',
            })
          );
          return true;
        }
        return hasListLoaded;
      }),
      first(),
      finalize(() => (this.isLoading = false))
    );
  }
}
