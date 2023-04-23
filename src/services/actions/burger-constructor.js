export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const UPDATE_BUN = 'UPDATE_BUN';
export const UPDATE_SELECTED_OTHER_INGREDIENTS = 'UPDATE_SELECTED_OTHER_INGREDIENTS';
export const UPDATE_SELECTED_BUNS = 'UPDATE_SELECTED_BUNS';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';


export const getSelectedOtherIngredients = (other) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_SELECTED_OTHER_INGREDIENTS,
            payload: other
        });
    }
}

export const getSelectedBuns = (bunsList) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_SELECTED_BUNS,
            payload: bunsList
        });
    }
}

export const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        payload: ingredient
    }
}

export const deleteIngredient = (id) => {
    return {
        type: DELETE_INGREDIENT,
        id: id
    }
}

export const updateBun = (ingredient) => {
    return {
        type: UPDATE_BUN,
        payload: ingredient
    }
}

export const shuffleIngredient = (dragIndex, hoverIndex) => {
    return {
        type: MOVE_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex
    }
}

