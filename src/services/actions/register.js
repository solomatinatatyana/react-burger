import {checkResponse, checkSuccess, NORMA_API} from "../../utils/burger-api";
import {setCookie} from "../../utils/utils";
import {getProfile} from "./profile";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const registerRequest =  (form, navigate) => {
    return function(dispatch) {
        dispatch({
            type: REGISTER_REQUEST
        });
        fetch(`${NORMA_API}/auth/register`, {
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
                setCookie('accessToken', res.accessToken.slice('Bearer '.length), { 'max-age': 1200 })
                setCookie('refreshToken', res.refreshToken)
                setCookie("password", form.password)
                dispatch(getProfile(res.user, form.password))
                navigate()
            }).catch(err=>{console.error(err)})
        };
}