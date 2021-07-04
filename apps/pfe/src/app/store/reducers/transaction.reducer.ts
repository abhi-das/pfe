import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { TransactionEntry, Transactions } from '../../fund-transfer/models';
import { TransferActions } from '../actions';

export interface TransactionState extends EntityState<TransactionEntry> {
  // data: TransactionEntry[] | undefined
  hasTransactionListLoaded: boolean;
  transactionError?: string;
}

// Without Adapter
// export const initialTransactionState: TransferState = {
//   data: undefined
// }

export const transactionAdaptor: EntityAdapter<TransactionEntry> = createEntityAdapter<TransactionEntry>(
  {
    selectId: (tranEntry) =>
      tranEntry.dates.valueDate +
      '-' +
      tranEntry.merchant.name.replace(/ /g, ''),
  }
);
export const initialTransactionState = transactionAdaptor.getInitialState({
  hasTransactionListLoaded: false,
  transactionError: '',
});

const hasTransactionListLoadedUpdateHandler = (state: TransactionState) => {
  return {
    ...state,
    hasTransactionListLoaded: true,
    transactionError: '',
  };
};

export const transactionReducers = createReducer(
  initialTransactionState,
  on(
    TransferActions.loadTransactionHistorySuccessFul,
    (state: TransactionState, action: Transactions) => {
      return transactionAdaptor.addMany(
        action.data,
        hasTransactionListLoadedUpdateHandler(state)
      );
    }
  ),
  on(
    TransferActions.addNewTransaction,
    (state: TransactionState, { lastTransaction }) => {
      return transactionAdaptor.addOne(lastTransaction, {
        ...state,
        transactionError: '',
      });
    }
  ),
  on(
    TransferActions.loadTransactionHistoryFailure,
    (state: TransactionState, { transactionError }) => {
      return {
        ...state,
        transactionError: transactionError,
      };
    }
  )
);

export const { selectAll } = transactionAdaptor.getSelectors();
