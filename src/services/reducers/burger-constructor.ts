import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    RESET_BURGER_CONSTRUCTOR,
    UPDATE_BUN,
    UPDATE_SELECTED_OTHER_INGREDIENTS,
} from "../actions/burger-constructor";
import {TBurgerConstructorActions} from "../action-types/burger-constructor";

export const initialIngredient = {
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
};

export type TBurgerConstructorState = {
    selectedIngredients: MODEL.TIngredient[],
    selectedBuns?: MODEL.TIngredient[]
    selectedOtherIngredients?: MODEL.TIngredient[]
    ingredient?: MODEL.TIngredient[]
}


export const initialBurgerConstructorState: TBurgerConstructorState = {
    selectedIngredients: [initialIngredient],
    //selectedBuns: [],
    selectedOtherIngredients: [],
    //ingredient: []
};


export const constructorReducer = (state = initialBurgerConstructorState, action: TBurgerConstructorActions): TBurgerConstructorState => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                selectedIngredients: [...state.selectedIngredients, action.payload],
            };
        }
        case DELETE_INGREDIENT: {
            return {
                selectedIngredients: state.selectedIngredients.filter((item: MODEL.TIngredient) => item.id !== action.id)
            };
        }
        case UPDATE_BUN: {
            let copiedSelectedIngredients = state.selectedIngredients;
            copiedSelectedIngredients.splice(0, 1, action.payload);
            return {
                selectedIngredients: copiedSelectedIngredients
            };
        }

        case UPDATE_SELECTED_OTHER_INGREDIENTS: {
            return {
                ...state,
                selectedOtherIngredients: action.payload,
            };
        }
        case RESET_BURGER_CONSTRUCTOR: {
            return {
                selectedIngredients: [initialIngredient]
            };
        }
        case MOVE_INGREDIENT: {
            const updatedIngredients = state.selectedIngredients;
            const dragItem = updatedIngredients[action.dragIndex];
            const hoverItem = updatedIngredients[action.hoverIndex];
            updatedIngredients.splice(action.hoverIndex, 1, dragItem);
            updatedIngredients.splice(action.dragIndex, 1, hoverItem);
            return {
                selectedIngredients: updatedIngredients
            };
        }

        default: {
            return state;
        }
    }
};