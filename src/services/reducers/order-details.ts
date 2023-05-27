import {CHECKOUT_FAILED, CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from "../actions/order-details";

export type TOrderDetailsState = {
    order: any
    checkoutRequest: boolean
    checkoutFailed: boolean
}

const initialState: TOrderDetailsState = {
    order: null,
    checkoutRequest: false,
    checkoutFailed: false,
};

export const orderDetailReducer = (state = initialState, action: any): TOrderDetailsState => {
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
        default: {
            return state;
        }
    }
};