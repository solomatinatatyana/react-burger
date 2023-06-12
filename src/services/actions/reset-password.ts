import {checkResponse, checkSuccess, NORMA_API} from "../../utils/burger-api";
import {setCookie} from "../../utils/utils";
import {TInputValues} from "../../hooks/useForm";
import {AppDispatch, AppThunk} from "../hook-store";

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';

export const getResetPasswordRequest = (form: TInputValues, navigate: ()=> void):AppThunk => {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        });
        fetch(`${NORMA_API}/password-reset/reset`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({password: form.password, token: form.code})
        })
            .then(checkResponse)
            .then(checkSuccess)
            .then(res => {
                setCookie('isForgotPasswordFlag', '', { 'max-age': 0 })
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}