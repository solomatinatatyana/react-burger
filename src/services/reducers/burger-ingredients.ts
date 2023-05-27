import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    RESET_COUNT_BUN,
} from "../actions/burger-ingredients";

export type TBurgerIngredientsState = {
    ingredients: MODEL.TIngredient[],
    ingredientsIsLoaded: boolean,
    ingredientsRequest: boolean,
    ingredientsFailed: boolean,
    count: number
}

const initialState: TBurgerIngredientsState = {
    ingredients: [],
    ingredientsIsLoaded: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    count: 0
};

export const ingredientsReducer = (state = initialState, action: any): TBurgerIngredientsState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsFailed: false,
                ingredients: action.ingredients,
                ingredientsRequest: false,
                ingredientsIsLoaded: true,
                count: 0
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {...state, ingredientsFailed: true, ingredientsRequest: false};
        }

        case RESET_COUNT_BUN: {
            return {
                ...state,
                ingredients: state.ingredients.map((item: MODEL.TIngredient) => item._id === action._id ? {
                    ...item,
                    count: 0
                } : item)
            };
        }
        default: {
            return state;
        }
    }
};