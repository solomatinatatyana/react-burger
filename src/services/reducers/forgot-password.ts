import {FORGOT_PASSWORD_REQUEST} from "../actions/forgot-password";
import {TForgotPasswordActions} from "../action-types/forgot-password";

export type TForgotPasswordState = {
    forgotPasswordRequest: boolean
}

const initialState:TForgotPasswordState = {
    forgotPasswordRequest: false,
};

export const forgotPasswordReducer = (state = initialState, action:TForgotPasswordActions):TForgotPasswordState => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true
            };
        }
        default: {
            return state;
        }
    }
}