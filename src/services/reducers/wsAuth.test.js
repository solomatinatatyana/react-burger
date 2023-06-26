import {initialWSAuthState, wsAuthReducer} from './wsAuth'
import {WS_AUTH_GET_MESSAGE, WS_AUTH_RESET_ORDERS} from "../action-types/wsAuth";

const orders = [
    {
        name: "Interstellar бургер",
        ingredients: [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733ce",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733c9",
        ],
        _id: "fdsfsdfsfsdfsf",
        status: "done",
        number: 55555,
        createdAt: "2021-06-23T14:43:22.587Z",
        updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
        name: "Another бургер",
        ingredients: [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d3",
            "60d3b41abdacab0026a733ce",
            "60d3b41abdacab0026a733d3"
        ],
        _id: "13456gggd",
        status: "done",
        number: 55555,
        createdAt: "2023-06-25T10:27:42.123Z",
        updatedAt: "2023-06-25T10:48:34.234Z"
    }
]

describe('wsAuthReducer', () => {
    it('должен вернуть initial state', () => {
        expect(wsAuthReducer(undefined, {})).toEqual(initialWSAuthState)
    })

    it('WS_AUTH_GET_MESSAGE', () => {
        expect(wsAuthReducer(
            initialWSAuthState,
            {type: WS_AUTH_GET_MESSAGE, message: {orders: orders, total: 55555, totalToday: 222}}))
            .toEqual({orders: orders, total: 55555, totalToday: 222})
    })

    it('WS_AUTH_RESET_ORDERS', () => {
        expect(wsAuthReducer(
            {orders: orders, total: 55555, totalToday: 222},
            {type: WS_AUTH_RESET_ORDERS}))
            .toEqual(initialWSAuthState)
    })

})
