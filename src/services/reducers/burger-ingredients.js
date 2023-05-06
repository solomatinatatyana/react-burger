import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    RESET_COUNT_BUN,
} from "../actions/burger-ingredients";

const initialState = {
    ingredients: [],
    ingredientsIsLoaded: false,
    ingredientsRequest: false,
    ingredientsFailed: false,
    count: 0
};

export const ingredientsReducer = (state = initialState, action) => {
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
                ingredients: state.ingredients.map(item => item._id === action._id ? {...item, count: 0} : item)
            };
        }
        default: {
            return state;
        }
    }
};