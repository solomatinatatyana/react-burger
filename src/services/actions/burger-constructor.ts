import {
    IAddIngredient,
    IDeleteIngredient,
    IMoveIngredient, IResetBurgerConstructor,
    IUpdateBun,
    IUpdateSelectedOtherIngredients
} from "../action-types/burger-constructor";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const UPDATE_BUN = 'UPDATE_BUN';
export const UPDATE_SELECTED_OTHER_INGREDIENTS = 'UPDATE_SELECTED_OTHER_INGREDIENTS';
export const UPDATE_SELECTED_BUNS = 'UPDATE_SELECTED_BUNS';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const RESET_BURGER_CONSTRUCTOR = 'RESET_BURGER_CONSTRUCTOR';


export const getSelectedOtherIngredients = (other: MODEL.TIngredient[]): IUpdateSelectedOtherIngredients => {
        return {
            type: UPDATE_SELECTED_OTHER_INGREDIENTS,
            payload: other
    }
}

export const getSelectedBuns = (bunsList: MODEL.TIngredient[]): any => {
    return function (dispatch: any) {
        dispatch({
            type: UPDATE_SELECTED_BUNS,
            payload: bunsList
        });
    }
}

export const addIngredient = (ingredient: MODEL.TIngredient): IAddIngredient => {
    return {
        type: ADD_INGREDIENT,
        payload: ingredient
    }
}

export const deleteIngredient = (id: string): IDeleteIngredient => {
    return {
        type: DELETE_INGREDIENT,
        id: id
    }
}

export const updateBun = (ingredient: MODEL.TIngredient): IUpdateBun => {
    return {
        type: UPDATE_BUN,
        payload: ingredient
    }
}

export const resetBurgerConstructor = (): IResetBurgerConstructor => ({type: RESET_BURGER_CONSTRUCTOR});

export const shuffleIngredient = (dragIndex: number, hoverIndex: number): IMoveIngredient => {
    return {
        type: MOVE_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex
    }
}

