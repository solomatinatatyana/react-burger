import {RESET_PASSWORD_REQUEST} from "../actions/reset-password";

export type TResetPasswordState = {
    resetPasswordRequest: boolean
}

const initialState: TResetPasswordState = {
    resetPasswordRequest: false,
};

export const resetPasswordReducer = (state = initialState, action:any): TResetPasswordState => {
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