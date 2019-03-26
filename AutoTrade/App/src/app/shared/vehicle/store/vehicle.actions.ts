import { Action } from '@ngrx/store';
import * as I from '../../../app.interfaces';

export const GET_VEHICLE = 'VEHICLE_GET_VEHICLE';
export const GET_VEHICLES = 'VEHICLE_GET_VEHICLES';
export const GET_SEARCHED_VEHICLES = 'VEHICLE_GET_SEARCHED_VEHICLES';
export const GET_VEHICLE_MAKES = 'VEHICLE_GET_VEHICLE_MAKES';
export const GET_VEHICLE_MODELS = 'VEHICLE_GET_VEHICLE_MODELS';
export const CLEAR_STATE = 'VEHICLE_CLEAR_STATE';


export class GetVehicle implements Action {
  readonly type = GET_VEHICLE;

  constructor(public payload: I.Vehicle) { }
}

export class GetVehicles implements Action {
  readonly type = GET_VEHICLES;

  constructor(public payload: I.Vehicle[]) { }
}

export class GetSearchedVehicles implements Action {
  readonly type = GET_SEARCHED_VEHICLES;

  constructor(public payload: I.Vehicle[]) { }
}

export class GetVehicleMakes implements Action {
  readonly type = GET_VEHICLE_MAKES;

  constructor(public payload: I.VehicleMake[]) { }
}

export class GetVehicleModels implements Action {
  readonly type = GET_VEHICLE_MODELS;

  constructor(public payload: I.VehicleModel[]) { }
}

export class ClearVehiclesState implements Action {
  readonly type = CLEAR_STATE;
}

export type VehicleActions = GetVehicle | GetVehicles | GetSearchedVehicles |
  GetVehicleMakes | GetVehicleModels | ClearVehiclesState;
