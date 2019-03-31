import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './shared/user/store/user.reducer';
import * as fromCommon from './shared/common/store/common.reducer';
import * as fromVehicle from './shared/vehicle/store/vehicle.reducer';


export interface State {
  user: fromUser.State;
  common: fromCommon.State;
  vehicle: fromVehicle.State;
}


export const reducers: ActionReducerMap<State> = {
  user: fromUser.userReducer,
  common: fromCommon.commonReducer,
  vehicle: fromVehicle.vehicleReducer,
};


export const getUserState = createFeatureSelector<fromUser.State>('user');
export const getIsAuth = createSelector(getUserState, fromUser.getIsAuth);
export const getIsAdmin = createSelector(getUserState, fromUser.getIsAdmin);

export const getCommonState = createFeatureSelector<fromCommon.State>('common');
export const getVehicleState = createFeatureSelector<fromCommon.State>('vehicle');
