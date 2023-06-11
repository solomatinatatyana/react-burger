import {
  WS_AUTH_CLOSED,
  WS_AUTH_CONNECT,
  WS_AUTH_DISCONNECT,
  WS_AUTH_GET_ERROR, WS_AUTH_GET_MESSAGE,
  WS_AUTH_OPENED
} from "../action-types/wsAuth";
import {WS_CLOSED, WS_CONNECT, WS_DISCONNECT, WS_GET_ERROR, WS_GET_MESSAGE, WS_OPENED} from "../action-types/ws";

export const wsAllActions = {
  toConnect: WS_CONNECT,
  toDisconnect: WS_DISCONNECT,
  onOpen: WS_OPENED,
  onClose: WS_CLOSED,
  onError: WS_GET_ERROR,
  onMessage: WS_GET_MESSAGE
};

export const wsAuthActions = {
  toConnect: WS_AUTH_CONNECT,
  toDisconnect: WS_AUTH_DISCONNECT,
  onOpen: WS_AUTH_OPENED,
  onClose: WS_AUTH_CLOSED,
  onError: WS_AUTH_GET_ERROR,
  onMessage: WS_AUTH_GET_MESSAGE
};

export type TypeWSAllActions = typeof wsAllActions;

export type TypeWSAuthActions = typeof wsAuthActions;
