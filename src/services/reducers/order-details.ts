import {CHECKOUT_FAILED, CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from "../actions/order-details";
import {ORDER_ID_RESET, TOrderActions} from "../action-types/order-details";

export type TOrderDetailsState = {
    order: any
    checkoutRequest: boolean
    checkoutFailed: boolean
}

export const initialOrderDetailsState: TOrderDetailsState = {
    order: null,
    checkoutRequest: false,
    checkoutFailed: false,
};

export const orderDetailReducer = (state = initialOrderDetailsState, action: TOrderActions): TOrderDetailsState => {
    switch (action.type) {
        case CHECKOUT_REQUEST: {
            return {
                ...state,
                checkoutRequest: true
            };
        }
        case CHECKOUT_SUCCESS: {
            return {...state, checkoutFailed: false, order: action.order, checkoutRequest: false};
        }
        case CHECKOUT_FAILED: {
            return {...state, checkoutFailed: true, checkoutRequest: false};
        }
        case ORDER_ID_RESET: {
            return initialOrderDetailsState;
        }
        default: {
            return state;
        }
    }
};