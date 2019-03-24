import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './shared/user/store/user.reducer';

export interface State {
  user: fromUser.State;
}


export const reducers: ActionReducerMap<State> = {
  user: fromUser.userReducer,
};


export const getUserState = createFeatureSelector<fromUser.State>('user');
export const getIsAuth = createSelector(getUserState, fromUser.getIsAuth);
export const getIsAdmin = createSelector(getUserState, fromUser.getIsAdmin);

