export const GET_ORDER_ID_SUCCESS: 'GET_ORDER_ID_SUCCESS' = 'GET_ORDER_ID_SUCCESS';
export const ORDER_ID_RESET: 'ORDER_ID_RESET' = 'ORDER_ID_RESET';
export const CHECKOUT_SUCCESS: 'CHECKOUT_SUCCESS' = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED: 'CHECKOUT_FAILED' = 'CHECKOUT_FAILED';
export const CHECKOUT_REQUEST: 'CHECKOUT_REQUEST' = 'CHECKOUT_REQUEST';


export interface IOrderIdSuccessAction {
    readonly type: typeof GET_ORDER_ID_SUCCESS
    readonly nameBurger: string
    readonly orderId: number
}

export interface IOrderIdResetAction {
    readonly type: typeof ORDER_ID_RESET
}

export interface ICheckoutSuccessAction {
    readonly type: typeof CHECKOUT_SUCCESS
    readonly order: MODEL.TOrderRs
}

export interface ICheckoutFailedAction {
    readonly type: typeof CHECKOUT_FAILED
}

export interface ICheckoutRequestAction {
    readonly type: typeof CHECKOUT_REQUEST
}

export type TOrderActions = IOrderIdSuccessAction | IOrderIdResetAction | ICheckoutSuccessAction | ICheckoutFailedAction
    | ICheckoutRequestAction;
