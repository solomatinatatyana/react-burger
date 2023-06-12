import {request} from "../utils/burger-api";
import {refreshTokenRequest} from "./actions/profile";
import {getAllTokens, setCookie, setOptions} from "../utils/utils";

export function getAccessToken(navigate?: () => void) {
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


export async function requestWithAuth(url: string, options: { [optionKey: string]: string | object }, navigate: () => void) {
    const accessToken = await refreshTokenRequest(navigate);
    let fullOptions = options;
    options.headers === undefined
        ? fullOptions.headers = {authorization: accessToken}
        : Object.assign(fullOptions.headers, {authorization: accessToken})
    return request(url, fullOptions);
}