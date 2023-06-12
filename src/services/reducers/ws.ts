import {TWSActions, WS_GET_ORDERS, WS_RESET_ORDERS} from "../action-types/ws";

type TWSState = {
  orders: MODEL.TOrder[];
  total: number;
  totalToday: number;
}

export const initialWSState: TWSState = {
  orders: [],
  total: 0,
  totalToday: 0
};

export const wsReducer = (state = initialWSState, action: TWSActions): TWSState => {
  switch (action.type) {
    case WS_GET_ORDERS: {
      return {
        ...state,
        orders: action.data.orders,
        total: action.data.total,
        totalToday: action.data.totalToday
      }
    }
    case WS_RESET_ORDERS: {
      return initialWSState;
    }
    default: {
      return state;
    }
  }
};
