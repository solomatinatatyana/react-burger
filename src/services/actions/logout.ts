import {checkResponse, checkSuccess, NORMA_API} from "../../utils/burger-api";
import {deleteCookies, getRefreshToken} from "../../utils/utils";
import {AppDispatch, AppThunk} from "../hook-store";

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const logoutRequest = (token: string| undefined, navigate: () => void):AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: LOGOUT_REQUEST
        });
        fetch(`${NORMA_API}/auth/logout`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${getRefreshToken()}`
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({token: token})
        })
            .then(checkResponse)
            .then(checkSuccess)
            .then(res => {
                deleteCookies()
                navigate()
            }).catch(err => {
            console.error(err)
        })
    };
}