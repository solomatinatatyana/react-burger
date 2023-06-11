import {AppDispatch, AppThunk} from "../hook-store";

export const GET_INGREDIENT_INFO = 'GET_INGREDIENT_INFO';

export const getIngredientInfo = (ingredient: MODEL.TIngredient): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_INGREDIENT_INFO,
            payload: ingredient
        });
    };
}