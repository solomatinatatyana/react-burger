import {
    IWSAuthClosed,
    IWSAuthConnect,
    IWSAuthDisConnect,
    IWSAuthGetError,
    IWSAuthGetMessage,
    IWSAuthGetOrders,
    IWSAuthOpened,
    IWSAuthResetOrders,
    WS_AUTH_CLOSED,
    WS_AUTH_CONNECT,
    WS_AUTH_DISCONNECT,
    WS_AUTH_GET_ERROR,
    WS_AUTH_GET_MESSAGE,
    WS_AUTH_GET_ORDERS,
    WS_AUTH_OPENED,
    WS_AUTH_RESET_ORDERS
} from "../action-types/wsAuth";

export const wsAuthConnect = (options: string): IWSAuthConnect => {
    return {
        type: WS_AUTH_CONNECT,
        payload: options
    }
};

export const wsAuthDisConnect = (): IWSAuthDisConnect => ({type: WS_AUTH_DISCONNECT});

export const wsAuthOpened = (): IWSAuthOpened => ({type: WS_AUTH_OPENED});

export const wsAuthClosed = (): IWSAuthClosed => ({type: WS_AUTH_CLOSED});

export const wsAuthGetError = (): IWSAuthGetError => ({type: WS_AUTH_GET_ERROR});

export const wsAuthResetOrders = (): IWSAuthResetOrders => ({type: WS_AUTH_RESET_ORDERS});

export const wsAuthGetMessage = (message: MODEL.TWSMessage): IWSAuthGetMessage => {
    return {
        type: WS_AUTH_GET_MESSAGE,
        message
    };
};

export const wsAuthGetOrders = (data: MODEL.TOrdersData): IWSAuthGetOrders => {
    return {
        type: WS_AUTH_GET_ORDERS,
        data
    };
};
