import {ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, UPDATE_BUN,} from "../actions/BurgerConstructor";

const initialState = {
    selectedIngredients: [],
    selectedBuns: [],
    selectedOtherIngredients: [],
    ingredient: []
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                selectedIngredients: [...state.selectedIngredients, action.payload],
            };
        }
        case DELETE_INGREDIENT: {
            return {
                selectedIngredients: state.selectedIngredients.filter((item) => item.id !== action.id)
            };
        }
        case UPDATE_BUN: {
            let copiedSelectedIngredients = state.selectedIngredients;
            copiedSelectedIngredients.splice(0, 1, action.payload);
            return {
                selectedIngredients: copiedSelectedIngredients
            };
        }
        /*        case UPDATE_SELECTED_INGREDIENTS: {
                    return {
                        ...state,
                        selectedIngredients: action.payload,

                    };
                }*/
        /*        case UPDATE_SELECTED_OTHER_INGREDIENTS: {
                    return {
                        ...state,
                        selectedOtherIngredients: action.payload,
                    };
                }
                case UPDATE_SELECTED_BUNS: {
                    return {
                        ...state,
                        selectedBuns: action.payload,
                    };
                }*/
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