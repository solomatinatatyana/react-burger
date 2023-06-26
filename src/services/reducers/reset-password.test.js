import {RESET_PASSWORD_REQUEST} from "../actions/reset-password";
import {initialResetPasswordState, resetPasswordReducer} from "./reset-password";

describe('resetPasswordReducer', () => {
    it('должен вернуть initial state', () => {
        expect(resetPasswordReducer(undefined, {})).toEqual(initialResetPasswordState)
    })

    it('RESET_PASSWORD_REQUEST', () => {
        expect(resetPasswordReducer(
            {resetPasswordRequest: false},
            {type: RESET_PASSWORD_REQUEST}))
            .toEqual({resetPasswordRequest: true})
    })

})
