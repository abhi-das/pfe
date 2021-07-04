import { createReducer, on } from '@ngrx/store';
import { User } from '../../auth/models';
import { AuthActions } from '../actions';

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducers = createReducer(
  initialAuthState,
  on(AuthActions.loginAction, (state: AuthState, action: AuthState) => {
    return {
      user: action.user,
    };
  }),
  on(AuthActions.logoutAction, () => {
    return {
      user: undefined,
    };
  })
);
