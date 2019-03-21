import * as types from './types';

const initialState = {
	vehicle: {},
	vehicles: [],
	vehicleMakes: [],
	vehicleModels: [],
	isLoading: true,
};

export const vehicleActionCreators = {
	
};


export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_VEHICLE:
			return {
				...state,
				vehicle: action.vehicle,
				isLoading: false,
			};
		case types.UPDATE_VEHICLES:
			return {
				...state,
				vehicles: state.vehicles.concat(action.vehicles),
				isLoading: false,
			};
		case types.UPDATE_VEHICLE_MAKES:
			return {
				...state,
				vehicleMakes: action.vehicleMakes,
				isLoading: false,
			};
		case types.UPDATE_VEHICLE_MODELS:
			return {
				...state,
				vehicleModels: action.vehicleModels,
				isLoading: false,
			};
		case types.UPDATE_CLEAR_STATE:
			return initialState;

		default: return state;
	}
};


