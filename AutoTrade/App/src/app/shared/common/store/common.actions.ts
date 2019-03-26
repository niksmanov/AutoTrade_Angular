import { Action } from '@ngrx/store';
import * as I from '../../../app.interfaces';

export const GET_TOWNS = 'COMMON_GET_TOWNS';
export const GET_COLORS = 'COMMON_GET_COLORS';
export const GET_VEHICLE_TYPES = 'COMMON_GET_VEHICLE_TYPES';
export const GET_FUEL_TYPES = 'COMMON_GET_FUEL_TYPES';
export const GET_GEARBOX_TYPES = 'COMMON_GET_GEARBOX_TYPES';
export const GET_ALL_COMMONS = 'COMMON_GET_ALL_COMMONS';
export const GET_IMAGES = 'COMMON_GET_IMAGES';


export class GetTowns implements Action {
  readonly type = GET_TOWNS;

  constructor(public payload: I.Common[]) { }
}

export class GetColors implements Action {
  readonly type = GET_COLORS;

  constructor(public payload: I.Common[]) { }
}

export class GetVehicleTypes implements Action {
  readonly type = GET_VEHICLE_TYPES;

  constructor(public payload: I.Common[]) { }
}

export class GetFuelTypes implements Action {
  readonly type = GET_FUEL_TYPES;

  constructor(public payload: I.Common[]) { }
}

export class GetGearboxTypes implements Action {
  readonly type = GET_GEARBOX_TYPES;

  constructor(public payload: I.Common[]) { }
}

export class GetAllCommons implements Action {
  readonly type = GET_ALL_COMMONS;

  constructor(public payload: I.AllCommons) { }
}

export class GetImages implements Action {
  readonly type = GET_IMAGES;

  constructor(public payload: I.Image[]) { }
}

export type CommonActions = GetTowns | GetColors | GetVehicleTypes |
  GetFuelTypes | GetGearboxTypes | GetAllCommons | GetImages;
