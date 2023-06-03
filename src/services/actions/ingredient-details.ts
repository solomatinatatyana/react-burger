export const GET_INGREDIENT_INFO = 'GET_INGREDIENT_INFO';

export const getIngredientInfo = (ingredient: MODEL.TIngredient):any => {
    return function (dispatch:any) {
        dispatch({
            type: GET_INGREDIENT_INFO,
            payload: ingredient
        });
    };
}