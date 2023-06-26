import {initialModalState, modalReducer} from './modal'
import {CLOSE_MODAL} from "../actions/modal";

describe('modalReducer', () => {
    it('должен вернуть initial state', () => {
        expect(modalReducer(undefined, {})).toEqual(initialModalState)
    })

    it('CLOSE_MODAL', () => {
        expect(modalReducer(undefined, {type: CLOSE_MODAL})).toEqual(initialModalState)
    })

})
