import { createAction, props } from '@ngrx/store';
import { User } from '../../auth/models';

export const loginAction = createAction(
  '[Login Page] Login',
  props<{ user: User }>()
);

export const logoutAction = createAction('[Top Nav] Logout');
