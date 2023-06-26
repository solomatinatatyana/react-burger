import {initialWSState, wsReducer} from './ws'
import {WS_GET_ORDERS, WS_RESET_ORDERS} from "../action-types/ws";

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

describe('wsReducer', () => {
    it('должен вернуть initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(initialWSState)
    })

    it('WS_GET_ORDERS', () => {
        expect(wsReducer(
            initialWSState,
            {type: WS_GET_ORDERS, data: {orders: orders, total: 55555, totalToday: 234}}))
            .toEqual({orders: orders, total: 55555, totalToday: 234})
    })

    it('WS_RESET_ORDERS', () => {
        expect(wsReducer(
            {orders: orders, total: 55555, totalToday: 234},
            {type: WS_RESET_ORDERS}))
            .toEqual(initialWSState)
    })

})
