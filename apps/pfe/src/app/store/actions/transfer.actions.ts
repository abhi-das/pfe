import { createAction, props } from '@ngrx/store';
import { TransactionEntry } from '../../fund-transfer/models';

export const loadTransactionHistory = createAction(
  '[Fund Transfer Resolver] Load Transactions'
);

export const loadTransactionHistorySuccessFul = createAction(
  '[Load Transaction Effect] Loaded All Transactions',
  props<{ data: TransactionEntry[] }>()
);
