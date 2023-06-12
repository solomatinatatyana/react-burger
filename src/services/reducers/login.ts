import {LOGIN_REQUEST} from "../actions/login";
import {TLoginActions} from "../action-types/login";

export type TLoginState = {
    userData: any
    loginRequest: boolean
}

const initialState: TLoginState = {
    userData: null,
    loginRequest: false,
};

export const loginReducer = (state = initialState, action: TLoginActions): TLoginState => {
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