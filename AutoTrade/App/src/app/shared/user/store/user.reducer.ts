import * as actions from './user.actions';

export interface UserState {
  isLoading: boolean;
  user: Object;
  users: Object[];
}

const initialState: UserState = {
  isLoading: true,
  user: {}, 
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
