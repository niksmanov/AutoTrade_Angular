import { Action } from '@ngrx/store';
import { User } from '../../../app.interfaces';

export const GET_USER = "USER_GET_USER";
export const GET_USERS = 'USER_GET_USERS';
export const CLEAR_STATE = 'USER_CLEAR_STATE';

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload: User) { }   
}

export class GetUsers implements Action {
  readonly type = GET_USERS;

  constructor(public payload: User[]) { }   
}

export class ClearUsersState implements Action {
  readonly type = CLEAR_STATE;
}

export type UserActions = GetUser | GetUsers | ClearUsersState;
