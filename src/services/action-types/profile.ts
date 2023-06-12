import {GET_INGREDIENTS_SUCCESS} from "./burger-ingredients";
import {IRegisterRequest, IRegisterSuccess} from "./register";

export const GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS' = 'GET_PROFILE_SUCCESS';
export const UPDATE_PROFILE: 'UPDATE_PROFILE' = 'UPDATE_PROFILE';

export interface IGetProfileSuccess {
    readonly type: typeof GET_PROFILE_SUCCESS
    readonly name: string
    readonly email: string
    readonly password: string
}

export interface IUpdateProfile {
    readonly type: typeof UPDATE_PROFILE
}

export type TProfileActions = IGetProfileSuccess | IUpdateProfile