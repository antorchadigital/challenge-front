import { REGISTER, LOGIN, LOGOUT, SET_DATA_ON_LOAD } from '../actions/auth';
import { persistLoginData, persistRegisterData } from '../../helpers/auth';

const initialState = {
	auth: {
		valid: false,
		data: null
	}
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case REGISTER:
			persistRegisterData(payload);
			return {
				...state,
				auth: {
					...state.auth,
					valid: true,
					data: payload
				}
			};
		case LOGIN:
			persistLoginData(payload);
			return {
				...state,
				auth: {
					...state.auth,
					valid: true,
					data: payload
				}
			};
		case LOGOUT:
			return {
				...state,
				auth: {
					...state.auth,
					valid: false,
					data: null
				}
			};
		case SET_DATA_ON_LOAD:
			return {
				...state,
				auth: {
					...state.auth,
					valid: true,
					data: payload
				}
			};
		default:
			return state;
	}
};

export default authReducer;