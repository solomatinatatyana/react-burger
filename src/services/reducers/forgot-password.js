import {FORGOT_PASSWORD_REQUEST} from "../actions/forgot-password";

const initialState = {
    forgotPasswordRequest: false,
};

export const forgotPasswordReducer = (state = initialState, action) => {
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