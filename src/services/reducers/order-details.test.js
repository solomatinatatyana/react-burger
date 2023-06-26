import {ingredientsReducer, initialBurgerIngredientsState} from "./burger-ingredients";
import {bun, main, order, sauce} from "../../utils/constants/mock-data";
import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS, RESET_COUNT_BUN
} from "../action-types/burger-ingredients";
import {initialOrderDetailsState, orderDetailReducer} from "./order-details";
import {CHECKOUT_FAILED, CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from "../actions/order-details";
import {ORDER_ID_RESET} from "../action-types/order-details";

describe('ingredientsReducer', () => {
    it('должен вернуть initial state', () => {
        expect(orderDetailReducer(undefined, {})).toEqual(initialOrderDetailsState)
    })

    it('CHECKOUT_SUCCESS', () => {
        expect(orderDetailReducer(
            initialOrderDetailsState,
            {type: CHECKOUT_SUCCESS,  order: order}))
            .toEqual({
                checkoutFailed: false, checkoutRequest: false,
                order: order
            })
    })

    it('CHECKOUT_REQUEST', () => {
        expect(orderDetailReducer(
            { checkoutFailed: false, checkoutRequest: false,
              order: order },
            {type: CHECKOUT_REQUEST}))
            .toEqual({ checkoutFailed: false, checkoutRequest: true,
                order: order })
    })

    it('CHECKOUT_FAILED', () => {
        expect(orderDetailReducer(
            { checkoutFailed: false, checkoutRequest: false,
                order: order },
            {type: CHECKOUT_FAILED}))
            .toEqual({ checkoutFailed: true, checkoutRequest: false,
                order: order })
    })

   /* it('ORDER_ID_RESET', () => {
        expect(orderDetailReducer(
            { checkoutFailed: false, checkoutRequest: false,
                order: order },
            {type: ORDER_ID_RESET}))
            .toEqual({initialOrderDetailsState})
    })*/

})
