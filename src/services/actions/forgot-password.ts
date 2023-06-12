import {request} from "../../utils/burger-api";
import {setCookie} from "../../utils/utils";
import {TInputValues} from "../../hooks/useForm";
import {AppDispatch, AppThunk} from "../hook-store";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';

export const getForgotPasswordRequest = (form: TInputValues, navigate: () => void): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        });
        request("/password-reset", {
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
            .then(res => {
                setCookie('isForgotPasswordFlag', 'true');
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}