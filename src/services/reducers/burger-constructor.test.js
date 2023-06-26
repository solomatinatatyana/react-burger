import {constructorReducer, initialBurgerConstructorState, initialIngredient} from './burger-constructor'
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    RESET_BURGER_CONSTRUCTOR,
    UPDATE_BUN,
    UPDATE_SELECTED_OTHER_INGREDIENTS
} from "../actions/burger-constructor";
import {bun, main, sauce} from "../../utils/constants/mock-data";

describe('constructorReducer', () => {
    it('должен вернуть initial state', () => {
        expect(constructorReducer(undefined, {})).toEqual(initialBurgerConstructorState)
    })

    it('ADD_INGREDIENT', () => {
        expect(constructorReducer(
            initialBurgerConstructorState,
            {type: ADD_INGREDIENT, payload: main}))
            .toEqual({selectedIngredients: [...initialBurgerConstructorState.selectedIngredients, main]})
    })

    it('DELETE_INGREDIENT', () => {
        expect(constructorReducer(
            {
                selectedIngredients: [...initialBurgerConstructorState.selectedIngredients, main]
            },
            {type: DELETE_INGREDIENT, id: main.id}))
            .toEqual({ selectedIngredients: initialBurgerConstructorState.selectedIngredients})
    })

    it('UPDATE_BUN', () => {
        expect(constructorReducer(
            initialBurgerConstructorState,
            {type: UPDATE_BUN, payload: bun}))
            .toEqual({selectedIngredients: [bun]})
    })

    it('UPDATE_SELECTED_OTHER_INGREDIENTS', () => {
        expect(constructorReducer(
            initialBurgerConstructorState,
            {type: UPDATE_SELECTED_OTHER_INGREDIENTS, payload: [sauce]}))
            .toEqual({
                selectedIngredients: initialBurgerConstructorState.selectedIngredients,
                selectedOtherIngredients: [sauce]
            })
    })

    it('MOVE_INGREDIENT', () => {
        expect(constructorReducer(
            {selectedIngredients: [bun, main, sauce]},
            {type: MOVE_INGREDIENT, dragIndex: 1, hoverIndex: 2}))
            .toEqual({selectedIngredients: [bun, sauce, main]})
    })

    it('RESET_BURGER_CONSTRUCTOR', () => {
        expect(constructorReducer(
            {selectedIngredients: [bun, sauce, main]},
            {type: RESET_BURGER_CONSTRUCTOR}))
            .toEqual({selectedIngredients: [initialIngredient]})
    })

})
