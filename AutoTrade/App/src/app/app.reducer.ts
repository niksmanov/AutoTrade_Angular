import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUser from './shared/user/store/user.reducer';

export interface State {
  user: fromUser.UserState;
}


export const reducers: ActionReducerMap<State> = {
  user: fromUser.userReducer,
};


export const getUserState = createFeatureSelector<fromUser.UserState>('user');
