import {initialLoginState, loginReducer} from "./login";
import {LOGIN_REQUEST} from "../actions/login";

describe('loginReducer', () => {
    it('должен вернуть initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(initialLoginState)
    })

    it('LOGIN_REQUEST', () => {
        expect(loginReducer(
            {userData: null, loginRequest: false},
            {type: LOGIN_REQUEST}))
            .toEqual({loginRequest: true, userData: null})
    })

})
