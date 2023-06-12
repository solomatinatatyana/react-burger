export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const UPDATE_BUN: 'UPDATE_BUN' = 'UPDATE_BUN';
export const UPDATE_SELECTED_OTHER_INGREDIENTS: 'UPDATE_SELECTED_OTHER_INGREDIENTS' = 'UPDATE_SELECTED_OTHER_INGREDIENTS';
export const UPDATE_SELECTED_BUNS: 'UPDATE_SELECTED_BUNS' = 'UPDATE_SELECTED_BUNS';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';
export const RESET_BURGER_CONSTRUCTOR: 'RESET_BURGER_CONSTRUCTOR' = 'RESET_BURGER_CONSTRUCTOR';

export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    readonly payload: MODEL.TIngredient;
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    readonly id: string;
}

export interface IUpdateBun {
    readonly type: typeof UPDATE_BUN;
    readonly payload: MODEL.TIngredient;
}

export interface IUpdateSelectedOtherIngredients {
    readonly type: typeof UPDATE_SELECTED_OTHER_INGREDIENTS;
    readonly payload: MODEL.TIngredient[];
}

export interface IResetBurgerConstructor {
    type: typeof RESET_BURGER_CONSTRUCTOR;
}

export interface IMoveIngredient {
    readonly type: typeof MOVE_INGREDIENT;
    readonly dragIndex: number,
    readonly hoverIndex: number
}

export type TBurgerConstructorActions = IAddIngredient | IDeleteIngredient | IUpdateBun
    | IUpdateSelectedOtherIngredients | IResetBurgerConstructor | IMoveIngredient;




