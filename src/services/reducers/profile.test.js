import {initialProfileState, profileReducer} from './profile'
import {GET_PROFILE_SUCCESS} from "../actions/profile";

describe('profileReducer', () => {
    it('должен вернуть initial state', () => {
        expect(profileReducer(undefined, {})).toEqual(initialProfileState)
    })

    it('GET_PROFILE_SUCCESS', () => {
        expect(profileReducer(
            initialProfileState,
            {type: GET_PROFILE_SUCCESS, name: 'name', email: 'email', password: 'password'}))
            .toEqual({profileLoaded: true, name: 'name', email: 'email', password: 'password'})
    })
})
