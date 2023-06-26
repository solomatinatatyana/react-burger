import {forgotPasswordReducer, initialForgotPasswordState} from "./forgot-password";
import {FORGOT_PASSWORD_REQUEST} from "../actions/forgot-password";

describe('forgotPasswordReducer', () => {
    it('должен вернуть initial state', () => {
        expect(forgotPasswordReducer(undefined, {})).toEqual(initialForgotPasswordState)
    })

    it('FORGOT_PASSWORD_REQUEST', () => {
        expect(forgotPasswordReducer(
            {forgotPasswordRequest: false},
            {type: FORGOT_PASSWORD_REQUEST}))
            .toEqual({forgotPasswordRequest: true})
    })

})
