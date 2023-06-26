import {main} from "../../utils/constants/mock-data";
import {ingredientDetailReducer, initialIngredientDetailState} from "./ingredient-details";
import {GET_INGREDIENT_INFO} from "../actions/ingredient-details";

describe('ingredientDetailReducer', () => {
    it('должен вернуть initial state', () => {
        expect(ingredientDetailReducer(undefined, {})).toEqual(initialIngredientDetailState)
    })

    it('GET_INGREDIENT_INFO', () => {
        expect(ingredientDetailReducer(
            {},
            {type: GET_INGREDIENT_INFO, payload: main}))
            .toEqual({
                ingredientInfo: main
            })
    })

})
