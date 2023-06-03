import {REGISTER_REQUEST, REGISTER_SUCCESS} from "../actions/register";

export type TRegisterState = {
    userData: any
    registerRequest: boolean
}

const initialState: TRegisterState = {
    userData: null,
    registerRequest: false,
};

export const registerReducer = (state = initialState, action:any):TRegisterState =>{
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