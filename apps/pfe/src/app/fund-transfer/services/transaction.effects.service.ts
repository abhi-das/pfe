import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { TransferActions } from '../../store/actions';
import { TransactionEntry, Transactions } from '../models';
import { TransactionService } from './transfer.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionEffectServices {
  constructor(
    private _actions: Actions,
    private _httpTrans: TransactionService
  ) {}

  // dispatch Load transactions and on success http call dispatch next successful action
  loadTransactionHistory = createEffect(() => {
    return this._actions.pipe(
      ofType(TransferActions.loadTransactionHistory),
      // ConcatMap for call API once
      concatMap(
        (): Observable<TransactionEntry[]> => {
          return this._httpTrans.loadTransHistory();
        }
      ),
      map((trans: TransactionEntry[]) =>
        TransferActions.loadTransactionHistorySuccessFul({ data: trans })
      )
    );
  });
}
