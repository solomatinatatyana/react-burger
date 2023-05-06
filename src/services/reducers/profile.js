import {GET_PROFILE_SUCCESS, PROFILE_RESET} from "../actions/profile";

const initialState  = {
    profileLoaded: false,
    name: '',
    email: '',
    password: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                profileLoaded: true,
                name: action.name,
                email: action.email,
                password: action.password
            };
        }
       /* case PROFILE_RESET: {
            return initialState;
        }*/
        default: {
            return state;
        }
    }
};