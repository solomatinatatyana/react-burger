import {LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/login";

const initialState = {
    userData: null,
    loginRequest: false,
};

export const loginReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true
            };
        }
        case LOGIN_SUCCESS: {
            return { ...state, loginRequest: false, userData: action };
        }
        default: {
            return state;
        }
    }
}