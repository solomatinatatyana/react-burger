import {FORGOT_PASSWORD_REQUEST} from "./forgot-password";

export const GET_INGREDIENT_INFO: 'GET_INGREDIENT_INFO' = 'GET_INGREDIENT_INFO';

export interface IGetIngredientInfo {
    readonly type: typeof GET_INGREDIENT_INFO
    readonly payload: MODEL.TIngredient
}


export type TIngredientDetailsActions = IGetIngredientInfo
