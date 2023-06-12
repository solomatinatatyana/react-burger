import {request} from "../../utils/burger-api";
import {setCookie} from "../../utils/utils";
import {getProfile} from "./profile";
import {TInputValues} from "../../hooks/useForm";
import {AppDispatch, AppThunk} from "../hook-store";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const registerRequest = (form: TInputValues, navigate: ()=>void):AppThunk => {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: REGISTER_REQUEST
        });
        request("/auth/register", {
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
            .then(res => {
                setCookie('accessToken', res.accessToken.slice('Bearer '.length), {'max-age': 1200})
                setCookie('refreshToken', res.refreshToken)
                setCookie("password", form.password)
                dispatch(getProfile(res.user, form.password))
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}