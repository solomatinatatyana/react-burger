import {checkResponse, checkSuccess, NORMA_API} from "../../utils/burger-api";
import {setCookie} from "../../utils/utils";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';

export const getForgotPasswordRequest = (form, navigate) => {
    return function (dispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        });
        fetch(`${NORMA_API}/password-reset`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({email: form.email})
        })
            .then(checkResponse)
            .then(checkSuccess)
            .then(res => {
                setCookie('isForgotPasswordFlag', 'true');
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}