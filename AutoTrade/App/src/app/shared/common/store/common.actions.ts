import * as types from './types';

const initialState = {
	allCommons: {},
	towns: [],
	colors: [],
	vehicleTypes: [],
	gearboxTypes: [],
	fuelTypes: [],
	images: [],
	isLoading: true,
};

export const commonActionCreators = {
	
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_TOWNS:
			return {
				...state,
				towns: action.towns,
				isLoading: false,
			};
		case types.UPDATE_COLORS:
			return {
				...state,
				colors: action.colors,
				isLoading: false,
			};
		case types.UPDATE_VEHICLE_TYPES:
			return {
				...state,
				vehicleTypes: action.vehicleTypes,
				isLoading: false,
			};
		case types.UPDATE_FUEL_TYPES:
			return {
				...state,
				fuelTypes: action.fuelTypes,
				isLoading: false,
			};
		case types.UPDATE_GEARBOX_TYPES:
			return {
				...state,
				gearboxTypes: action.gearboxTypes,
				isLoading: false,
			};
		case types.UPDATE_ALL_COMMONS:
			return {
				...state,
				allCommons: action.allCommons,
				isLoading: false,
			};
		case types.UPDATE_IMAGES:
			return {
				...state,
				images: action.images,
				isLoading: false,
			};

		default: return state;
	}
};
