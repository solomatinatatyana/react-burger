import {GET_INGREDIENT_INFO} from "../actions/ingredient-details";
import {TIngredientDetailsActions} from "../action-types/ingredient-details";

export type TIngredientDetailState = {
    ingredientInfo: MODEL.TIngredient
}

export const initialIngredientDetailState: TIngredientDetailState = {
    ingredientInfo: {
        carbohydrates: 0,
        calories: 0,
        fat: 0,
        image: '',
        image_large: '',
        image_mobile: '',
        name: '',
        price: 0,
        proteins: 0,
        type: 'blank',
        __v: 0,
        _id: '',
        count: 0,
        id: ''
    }
};

export const ingredientDetailReducer = (state = initialIngredientDetailState, action: TIngredientDetailsActions): TIngredientDetailState => {
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