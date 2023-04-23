import {GET_INGREDIENT_INFO} from "../actions/ingredient-details";

const initialState = {
    ingredientInfo: {
        _id: "",
        image: "",
        name: "",
        calories: 0,
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        id: "",
        count: 0
    }
};

export const ingredientDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENT_INFO: {
            return {
                ...state, ingredientInfo: action.payload
            };
        }
        default: {
            return state;
        }
    }
};