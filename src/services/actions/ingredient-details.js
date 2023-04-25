export const GET_INGREDIENT_INFO = 'GET_INGREDIENT_INFO';

export const getIngredientInfo = (ingredient) => {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENT_INFO,
            payload: ingredient
        });
    };
}