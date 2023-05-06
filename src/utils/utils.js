export const getRandom = (n, arr) => {
    const indexes = new Set();
    const limit = arr.length;
    n = Math.min(n, limit);
    while (indexes.size < n) {
        const index = Math.floor(limit * Math.random());
        indexes.add(index);
    }
    const result = [...indexes].map(index => arr[index]);
    return result;
};

export const generateRandomBun = (list) => {
    const buns = list?.filter(b => b.type === "bun");
    const rand = Math.floor(Math.random() * buns.length);
    return buns[rand];
}

export const generateRandomIngredients = (list) => {
    const notBuns = list?.filter(b => b.type !== "bun");
    let targetIngredientList = getRandom(Math.floor(Math.random() * notBuns.length), notBuns)
    if(list.length!==0) {targetIngredientList.push(generateRandomBun(list))}
    return targetIngredientList;
}

export function setCookie(name, value, props) {
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

export function getCookie(name) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const getRefreshToken = () => getCookie('refreshToken');

export const getAllTokens = () => {
    let accessToken = getCookie('accessToken');
    if (accessToken !== undefined) { accessToken = 'Bearer ' + accessToken };
    return { accessToken: accessToken, refreshToken: getCookie('refreshToken') };
}

export const isLogged = () => getRefreshToken() !== undefined;

export const deleteCookies = () => {
    setCookie('name', '', { 'max-age': 0 });
    setCookie('email', '', { 'max-age': 0 });
    setCookie('password', '', { 'max-age': 0 });
    setCookie('accessToken', '', { 'max-age': 0 });
    setCookie('refreshToken', '', { 'max-age': 0 });
}



