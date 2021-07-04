import { createFeatureSelector, createSelector } from '@ngrx/store';
import { transactionStore } from '../reducers';

export const selectTransactionState = createFeatureSelector<transactionStore.TransactionState>(
  'transactions'
);

export const transactionSelectAll = createSelector(
  selectTransactionState,
  transactionStore.selectAll
);

export const hasTransactionListLoaded = createSelector(
  selectTransactionState,
  (state) => state.hasTransactionListLoaded
);
