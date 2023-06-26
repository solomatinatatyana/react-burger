import {ingredientsReducer, initialBurgerIngredientsState} from "./burger-ingredients";
import {bun, main, sauce} from "../../utils/constants/mock-data";
import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS, RESET_COUNT_BUN
} from "../action-types/burger-ingredients";

describe('ingredientsReducer', () => {
    it('должен вернуть initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(initialBurgerIngredientsState)
    })

    it('GET_INGREDIENTS_SUCCESS', () => {
        expect(ingredientsReducer(
            initialBurgerIngredientsState,
            {type: GET_INGREDIENTS_SUCCESS, ingredients: [bun, main, sauce]}))
            .toEqual({
                ingredientsIsLoaded: true, ingredientsRequest: false, ingredientsFailed: false,
                ingredients: [bun, main, sauce], count: 0
            })
    })

    it('GET_INGREDIENTS_REQUEST', () => {
        expect(ingredientsReducer(
            { ingredientsIsLoaded: false, ingredientsRequest: false, ingredientsFailed: false,
              ingredients: [bun, main, sauce], count:0 },
            {type: GET_INGREDIENTS_REQUEST}))
            .toEqual({ingredientsRequest: true, ingredientsIsLoaded: false, ingredientsFailed: false,
              ingredients: [bun, main, sauce], count:0 })
    })

    it('GET_INGREDIENTS_FAILED', () => {
        expect(ingredientsReducer(
            { ingredientsIsLoaded: false, ingredientsRequest: false, ingredientsFailed: false,
              ingredients: [bun, main, sauce], count:0 },
            {type: GET_INGREDIENTS_FAILED}))
            .toEqual({ingredientsRequest: false, ingredientsIsLoaded: false, ingredientsFailed: true,
              ingredients: [bun, main, sauce], count:0 })
    })

    it('RESET_COUNT_BUN', () => {
        expect(ingredientsReducer(
            { ingredientsIsLoaded: false, ingredientsRequest: false, ingredientsFailed: false,
              ingredients: [bun, main, sauce], count:0 },
            {type: RESET_COUNT_BUN, _id: bun._id}))
            .toEqual({ingredientsIsLoaded: false, ingredientsRequest: false, ingredientsFailed: false,
              ingredients: [bun, main, sauce], count:0})
    })

})
