import {initialRegisterState, registerReducer} from "./register";
import {REGISTER_REQUEST} from "../actions/register";

describe('registerReducer', () => {
    it('должен вернуть initial state', () => {
        expect(registerReducer(undefined, {})).toEqual(initialRegisterState)
    })

    it('REGISTER_REQUEST', () => {
        expect(registerReducer(
            {userData: null, registerRequest: false},
            {type: REGISTER_REQUEST}))
            .toEqual({registerRequest: true, userData: null})
    })
})
