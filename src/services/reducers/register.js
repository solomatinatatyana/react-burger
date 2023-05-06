import {REGISTER_REQUEST, REGISTER_SUCCESS} from "../actions/register";

const initialState = {
    userData: null,
    registerRequest: false,
};

export const registerReducer = (state = initialState, action) =>{
    switch (action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true
            };
        }
        case REGISTER_SUCCESS: {
            return { ...state, registerRequest: false, userData: action };
        }
        default: {
            return state;
        }
    }
}