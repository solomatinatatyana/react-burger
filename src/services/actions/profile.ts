import {getAllTokens, getCookie, setCookie, setOptions} from "../../utils/utils";
import {request} from "../../utils/burger-api";
import {TInputValues} from "../../hooks/useForm";

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';


export const getProfileRequest = (navigate: () => void): any => {
    return function (dispatch: any) {
        requestWithAuth(`/auth/user`, setOptions("GET"), navigate)
            .then(res => {
                    dispatch(getProfile(res.user, getCookie('password') || ''));
                }
            );
    };
}

export const updateProfileRequest = (form: TInputValues, navigate: () => void): any => {
    return function (dispatch: any) {
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

async function requestWithAuth(url: string, options: { [optionKey: string]: string | object }, navigate: () => void) {
    const accessToken = await refreshTokenRequest(navigate);
    let fullOptions = options;
    options.headers === undefined
        ? fullOptions.headers = {authorization: accessToken}
        : Object.assign(fullOptions.headers, {authorization: accessToken})
    return request(url, fullOptions);
}


export const getProfile = (user: MODEL.TUser, password: string) => {
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
