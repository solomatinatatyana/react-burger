import type {Middleware} from 'redux';


import {TAppActions} from "../hook-store";
import {WS_CLOSED, WS_CONNECT, WS_GET_MESSAGE, WS_OPENED} from "../action-types/ws";
import {WS_AUTH_CLOSED, WS_AUTH_CONNECT, WS_AUTH_OPENED} from "../action-types/wsAuth";
import {wsGetOrders} from "../actions/ws";

export const wsDataMiddleware = (): Middleware => {

    let isFlagUp = false;

    return store => next => (action: TAppActions) => {

        const filterOrders = (message: MODEL.TWSMessage): MODEL.TOrdersData => {

            const {ingredients} = getState().burgerIngredients;

            let ordersData: MODEL.TOrdersData = {
                orders: [],
                total: message.total,
                totalToday: message.totalToday
            };

            let arrIDBuns: string[] = [];
            let arrIDIngredients: string[] = [];

            ingredients.forEach((it: MODEL.TIngredient) =>
                it.type === 'bun'
                    ? arrIDBuns = [...arrIDBuns, it._id]
                    : arrIDIngredients = [...arrIDIngredients, it._id]);

            ordersData.orders = message.orders.filter(it =>
                it.ingredients.every(item => arrIDBuns.includes(item) || arrIDIngredients.includes(item))
            );

            ordersData.orders = ordersData.orders.filter(it =>
                it.ingredients.some(item => arrIDIngredients.includes(item))
            );

            ordersData.orders = ordersData.orders.filter(it =>
                it.ingredients.some(item => arrIDBuns.includes(item))
            );

            ordersData.orders = ordersData.orders.filter(it =>
                it.ingredients.reduce((prev, item) => arrIDBuns.includes(item) ? ++prev : prev, 0) === 1
            );

            ordersData.orders.forEach(it => it.ingredients.sort(item => arrIDBuns.includes(item) ? -1 : 1));

            return ordersData
        }

        const {dispatch, getState} = store;
        const {type} = action;

        if (type === (WS_CONNECT || WS_AUTH_CONNECT) && !isFlagUp) {
            isFlagUp = true;
        }
        ;

        if (type === (WS_OPENED || WS_AUTH_OPENED) && isFlagUp) {
            isFlagUp = false;
        }
        ;

        //if (type === (WS_GET_ERROR || WS_AUTH_GET_ERROR)) dispatch();

        if (type === (WS_CLOSED || WS_AUTH_CLOSED)) isFlagUp = false;

        if (type === WS_GET_MESSAGE && action.message.orders?.length > 0)
            dispatch(wsGetOrders(filterOrders(action.message)));

        next(action);
    }
};
