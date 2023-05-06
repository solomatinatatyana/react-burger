import {checkResponse, checkSuccess, NORMA_API} from "../../utils/burger-api";
import {setCookie} from "../../utils/utils";
import {getProfile} from "./profile";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginRequest = (form, navigate) => {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });
        fetch(`${NORMA_API}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(form)
        })
            .then(checkResponse)
            .then(checkSuccess)
            .then(res => {
                setCookie('accessToken', res.accessToken.slice('Bearer '.length), {'max-age': 1200})
                setCookie('refreshToken', res.refreshToken)
                setCookie("password", form.password)
                dispatch(getProfile(res.user, form.password));
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}