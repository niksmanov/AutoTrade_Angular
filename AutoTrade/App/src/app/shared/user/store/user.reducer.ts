import * as actions from './user.actions';
import { User } from '../../../app.interfaces';

export interface State {
  isLoading: boolean;
  user: User;
  users: User[];
}

const initialState: State = {
  isLoading: true,
  user: null, 
  users: [], 
};


export function userReducer(state = initialState, action: actions.UserActions) {
  switch (action.type) {
    case actions.GET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case actions.GET_USERS:
      return {
        ...state,
        users: state.users.concat(action.payload),
        isLoading: false,
      };
    case actions.CLEAR_STATE:
      return initialState;

    default: return state;
  }
};

export const getIsAuth = (state: State) => state.user !== null;
export const getIsAdmin = (state: State) => state.user !== null && state.user.isAdmin;
