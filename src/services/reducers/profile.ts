import {GET_PROFILE_SUCCESS} from "../actions/profile";

export type TProfileState = {
    profileLoaded: boolean
    name: string
    email: string
    password: string
}

const initialState: TProfileState = {
    profileLoaded: false,
    name: '',
    email: '',
    password: ''
};

export const profileReducer = (state = initialState, action:any): TProfileState => {
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
        default: {
            return state;
        }
    }
};