import {RESET_PASSWORD_REQUEST} from "../actions/reset-password";

const initialState = {
    resetPasswordRequest: false,
};

export const resetPasswordReducer = (state = initialState, action) => {
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