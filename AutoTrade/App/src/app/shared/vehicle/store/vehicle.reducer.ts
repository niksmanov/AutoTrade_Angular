import * as actions from './vehicle.actions';
import * as I from '../../../app.interfaces';

export interface State {
  isLoading: boolean,
  vehicle: I.Vehicle,
  vehicles: I.Vehicle[],
  vehicleMakes: I.VehicleMake[],
  vehicleModels: I.VehicleModel[],
}

const initialState = {
  vehicle: null,
  vehicles: [],
  vehicleMakes: [],
  vehicleModels: [],
  isLoading: true,
};


export function vehicleReducer(state = initialState, action: actions.VehicleActions) {
  switch (action.type) {
    case actions.GET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
        isLoading: false,
      };
    case actions.GET_VEHICLES:
      return {
        ...state,
        vehicles: state.vehicles.concat(action.payload),
        isLoading: false,
      };
    case actions.GET_SEARCHED_VEHICLES:
      return {
        ...state,
        vehicles: state.vehicles.concat(action.payload),
        isLoading: false,
      };
    case actions.GET_VEHICLE_MAKES:
      return {
        ...state,
        vehicleMakes: action.payload,
        isLoading: false,
      };
    case actions.GET_VEHICLE_MODELS:
      return {
        ...state,
        vehicleModels: action.payload,
        isLoading: false,
      };
    case actions.CLEAR_STATE:
      return initialState;

    default: return state;
  }
};


