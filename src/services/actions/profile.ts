import {getAllTokens, getCookie, setCookie, setOptions} from "../../utils/utils";
import {request} from "../../utils/burger-api";
import {TInputValues} from "../../hooks/useForm";
import {requestWithAuth} from "../get-data";
import {AppDispatch, AppThunk} from "../hook-store";
import {IGetProfileSuccess} from "../action-types/profile";

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';


export const getProfileRequest = (navigate: () => void): AppThunk => {
    return function (dispatch: AppDispatch) {
        requestWithAuth(`/auth/user`, setOptions("GET"), navigate)
            .then(res => {
                    dispatch(getProfile(res.user, getCookie('password') || ''));
                }
            );
    };
}

export const updateProfileRequest = (form: TInputValues, navigate: () => void): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch({type: UPDATE_PROFILE})
        requestWithAuth(`/auth/user`, setOptions("PATCH",
            {name: form.name, email: form.email, password: form.password}), navigate)
            .then(res => {
                    dispatch(getProfile(res.user, form.password));
                    navigate();
                }
            );
    };
}

export const getProfile = (user: MODEL.TUser, password: string) : IGetProfileSuccess  => {
    return {
        type: GET_PROFILE_SUCCESS,
        name: user.name,
        email: user.email,
        password: password
    }
};

export function refreshTokenRequest(navigate: () => void) {
    const {accessToken, refreshToken} = getAllTokens();
    if (refreshToken === undefined) {
        if (navigate !== undefined) {
            navigate()
        } else console.warn('Ошибка при авторизации пользователя');
    }
    if (accessToken !== undefined) return Promise.resolve(accessToken);
    request(`/auth/token`, setOptions('POST', {token: refreshToken}))
        .then((res) => {
            setCookie('accessToken', res.accessToken.slice('Bearer '.length), {'max-age': 1200});
            setCookie('refreshToken', res.refreshToken);
            return res;
        })
        .catch((err) => err)
}
