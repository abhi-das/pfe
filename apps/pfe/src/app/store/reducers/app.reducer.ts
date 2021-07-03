import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { TransactionState } from './transaction.reducer';

export interface AppState {
  auth?: AuthState;
  transactions?: TransactionState;
}

export const appReducer: ActionReducerMap<AppState> = {};
