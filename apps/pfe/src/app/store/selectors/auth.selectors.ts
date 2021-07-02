import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authStore } from '../reducers';

export const selectAuthState = createFeatureSelector<authStore.AuthState>(
  'auth'
);

export const isLoggedIn = createSelector(
  // (state: AppReducer.AppState) => state.auth,
  selectAuthState,
  (auth) => !!auth?.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
