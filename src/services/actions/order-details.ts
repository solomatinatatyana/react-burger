import {requestWithAuth} from "../get-data";
import {setOptions} from "../../utils/utils";
import {
    GET_ORDER_ID_SUCCESS, ICheckoutSuccessAction,
    IOrderIdResetAction,
    IOrderIdSuccessAction,
    ORDER_ID_RESET
} from "../action-types/order-details";
import {AppDispatch, AppThunk} from "../hook-store";

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'CHECKOUT_FAILED';

export const getOrderIdSuccess = (name: string, orderId: number): IOrderIdSuccessAction => {
    return {
        type: GET_ORDER_ID_SUCCESS,
        nameBurger: name,
        orderId,
    }
};

export const resetOrderId = (): IOrderIdResetAction => ({type: ORDER_ID_RESET});

export const makeOrder = (res: MODEL.TOrderRs): ICheckoutSuccessAction => {
    return {
        type: CHECKOUT_SUCCESS,
        order: res
    }
};

export const makeOrderRequest = (data: { ingredients: string[] }, navigate: () => void): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch({type: CHECKOUT_REQUEST})
        requestWithAuth(`/orders`, setOptions("POST",
            data), navigate)
            .then(res => {
                    if (res && res.success) {
                        dispatch(makeOrder(res));
                    } else {
                        dispatch({
                            type: CHECKOUT_FAILED
                        });
                    }
                }
            );
    };
}

