export function setCookie(name: string, value: string, props?:
    {
        path?: string
        expires?: Date | string | number| any
        [propName: string]: any
    }
): void {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}

export function getCookie(name: string): string | undefined {
    const matches: Array<string> | null = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const getRefreshToken = (): string | undefined => getCookie('refreshToken');

export const getAllTokens = (): { accessToken: string | undefined, refreshToken: string | undefined } => {
    let accessToken = getCookie('accessToken');
    if (accessToken !== undefined) {
        accessToken = 'Bearer ' + accessToken
    }
    return {accessToken: accessToken, refreshToken: getCookie('refreshToken')};
}

export const isLogged = (): boolean => getRefreshToken() !== undefined;

export const deleteCookies = (): void => {
    setCookie('name', '', {'max-age': 0});
    setCookie('email', '', {'max-age': 0});
    setCookie('password', '', {'max-age': 0});
    setCookie('accessToken', '', {'max-age': 0});
    setCookie('refreshToken', '', {'max-age': 0});
}

export const setOptions = (method?: string | undefined, body?: object | undefined, header?: object | undefined) => {
    const options: { [optionKey: string]: string | object } = {headers: {'Content-Type': 'application/json'}}
    if (method !== undefined) options.method = `${method}`;
    if (body !== undefined) options.body = JSON.stringify(body);
    if (header !== undefined) Object.assign(options.headers, header);
    return options;
}

