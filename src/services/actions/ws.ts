import {
  IWSClosed,
  IWSConnect,
  IWSDisConnect, IWSGetError, IWSGetMessage, IWSGetOrders,
  IWSOpened, IWSResetOrders, WS_CLOSED,
  WS_CONNECT,
  WS_DISCONNECT, WS_GET_ERROR, WS_GET_MESSAGE, WS_GET_ORDERS,
  WS_OPENED, WS_RESET_ORDERS
} from "../action-types/ws";

export const wsConnect = (options: string): IWSConnect => {
  return {
    type: WS_CONNECT,
    payload: options
  }
};

export const wsDisConnect = (): IWSDisConnect => ({ type: WS_DISCONNECT });

export const wsOpened = (): IWSOpened => ({ type: WS_OPENED });

export const wsClosed = (): IWSClosed => ({ type: WS_CLOSED });

export const wsGetError = (): IWSGetError => ({ type: WS_GET_ERROR });

export const wsResetOrders = (): IWSResetOrders => ({ type: WS_RESET_ORDERS });

export const wsGetMessage = (message: MODEL.TWSMessage): IWSGetMessage => {
  debugger
  return {
    type: WS_GET_MESSAGE,
    message
  };
};

export const wsGetOrders = (data: MODEL.TOrdersData): IWSGetOrders => {
  return {
    type: WS_GET_ORDERS,
    data
  };
};
