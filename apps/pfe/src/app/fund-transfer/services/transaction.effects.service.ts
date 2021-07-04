import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { TransferActions } from '../../store/actions';
import { TransactionEntry } from '../models';
import { TransactionService } from './transfer.service';

export class EffectError implements Action {
  readonly type = '[Error] Effect Error';
}

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
      // catchError(() => {
      //   console.log('Here Error!')
      //   return of(TransferActions.loadTransactionHistoryFailure({ transactionError: "Error on loading history!" }))
      // })
    );
  });
}
