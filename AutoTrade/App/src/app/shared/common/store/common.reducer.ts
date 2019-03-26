import * as actions from './common.actions';
import * as I from '../../../app.interfaces';

export interface State {
  isLoading: boolean,
  allCommons: I.AllCommons,
  towns: I.Common[],
  colors: I.Common[],
  vehicleTypes: I.Common[],
  gearboxTypes: I.Common[],
  fuelTypes: I.Common[],
  images: I.Image[],
}

const initialState: State = {
  allCommons: null,
  towns: [],
  colors: [],
  vehicleTypes: [],
  gearboxTypes: [],
  fuelTypes: [],
  images: [],
  isLoading: true,
};

export function commonReducer(state = initialState, action: actions.CommonActions) {
  switch (action.type) {
    case actions.GET_TOWNS:
      return {
        ...state,
        towns: action.payload,
        isLoading: false,
      };
    case actions.GET_COLORS:
      return {
        ...state,
        colors: action.payload,
        isLoading: false,
      };
    case actions.GET_VEHICLE_TYPES:
      return {
        ...state,
        vehicleTypes: action.payload,
        isLoading: false,
      };
    case actions.GET_FUEL_TYPES:
      return {
        ...state,
        fuelTypes: action.payload,
        isLoading: false,
      };
    case actions.GET_GEARBOX_TYPES:
      return {
        ...state,
        gearboxTypes: action.payload,
        isLoading: false,
      };
    case actions.GET_ALL_COMMONS:
      return {
        ...state,
        allCommons: action.payload,
        isLoading: false,
      };
    case actions.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        isLoading: false,
      };

    default: return state;
  }
};
