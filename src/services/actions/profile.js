import {checkResponse, checkSuccess, NORMA_API} from "../../utils/burger-api";
import {getCookie, setCookie} from "../../utils/utils";

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

//export const PROFILE_RESET = 'PROFILE_RESET';

export const getProfileRequest = (navigate) => {
    return function (dispatch) {
        dispatch({
            type: GET_PROFILE_SUCCESS
        });
        fetch(`${NORMA_API}/auth/user`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        })
            .then(checkResponse)
            .then(checkSuccess)
            .then(res => {
                dispatch(getProfile(res.user, getCookie('password')));
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}

export const updateProfileRequest = (form, navigate) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_PROFILE
        });
        fetch(`${NORMA_API}/auth/user`, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getCookie("accessToken")}`
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({name: form.name, email: form.email, password: form.password})
        })
            .then(checkResponse)
            .then(checkSuccess)
            .then(res => {
                setCookie("password", form.password)
                dispatch(getProfile(res.user, form.password));
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}


export const getProfile = (user, password) => {
    return {
        type: GET_PROFILE_SUCCESS,
        name: user.name,
        email: user.email,
        password: password
    }
};