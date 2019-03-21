import { Action } from '@ngrx/store';

export const GET_USER = "USER_GET_USER";
export const GET_USERS = 'USER_GET_USERS';
export const CLEAR_STATE = 'USER_CLEAR_STATE';

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload: Object) { }   
}

export class GetUsers implements Action {
  readonly type = GET_USERS;

  constructor(public payload: Object[]) { }   
}

export class ClearUsersState implements Action {
  readonly type = CLEAR_STATE;
}

export type UserActions = GetUser | GetUsers | ClearUsersState;

  //[types.GET_USER]: () => {
  //  return (dispatch) => {
  //    axios.get('/user/current')
  //      .then(r => { return r.data })
  //      .then(response => {
  //        if (response.succeeded) {
  //          dispatch({
  //            type: types.UPDATE_USER,
  //            user: response.data
  //          });
  //        }
  //      });
  //  }
  //},
  //[types.GET_USERS]: (page, size, search = '') => {
  //  return (dispatch) => {
  //    axios.get('/admin/getusers', {
  //      params: {
  //        page: page,
  //        size: size,
  //        search: search,
  //      }
  //    }).then(r => { return r.data })
  //      .then(response => {
  //        if (response.succeeded) {
  //          dispatch({
  //            type: types.UPDATE_USERS,
  //            users: response.data,
  //          });
  //        }
  //      });
  //  }
  //},
  //[types.CLEAR_STATE]: () => {
  //  return (dispatch) => {
  //    dispatch({ type: types.UPDATE_CLEAR_STATE });
  //  }
  //},

