import {GET_ORDER_ID_SUCCESS} from "./order-details";

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export const RESET_COUNT_BUN: 'RESET_COUNT_BUN' = 'RESET_COUNT_BUN';

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS
    readonly ingredients: MODEL.TIngredient[]
}

export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED
}

export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}

export interface IResetCountBun {
    readonly type: typeof RESET_COUNT_BUN
    readonly _id: string
}

export type TBurgerIngredientsActions = IResetCountBun | IGetIngredientsSuccess| IGetIngredientsFailed
| IGetIngredientsRequest