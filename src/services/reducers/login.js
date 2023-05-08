import {LOGIN_REQUEST} from "../actions/login";

const initialState = {
    userData: null,
    loginRequest: false,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true
            };
        }
        default: {
            return state;
        }
    }
}