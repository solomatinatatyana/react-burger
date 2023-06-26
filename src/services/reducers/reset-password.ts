import {RESET_PASSWORD_REQUEST} from "../actions/reset-password";
import {TResetPasswordActions} from "../action-types/resetPassword";

export type TResetPasswordState = {
    resetPasswordRequest: boolean
}

export const initialResetPasswordState: TResetPasswordState = {
    resetPasswordRequest: false,
};

export const resetPasswordReducer = (state = initialResetPasswordState, action: TResetPasswordActions): TResetPasswordState => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true
            };
        }
        default: {
            return state;
        }
    }
}