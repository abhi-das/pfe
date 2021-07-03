import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { TransactionEntry, Transactions } from '../../fund-transfer/models';
import { TransferActions } from '../actions';

export interface TransactionState extends EntityState<TransactionEntry> {
  // data: TransactionEntry[] | undefined
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
export const initialTransactionState = transactionAdaptor.getInitialState();

export const transactionReducers = createReducer(
  initialTransactionState,
  on(
    TransferActions.loadTransactionHistorySuccessFul,
    (state: TransactionState, action: Transactions) => {
      return transactionAdaptor.addMany(action.data, state);
    }
  )
);

export const { selectAll } = transactionAdaptor.getSelectors();
