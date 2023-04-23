export const NORMA_API = "https://norma.nomoreparties.space/api"

export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json()
        .then((err) => Promise.reject(err));
};


export const checkSuccess = (res) => {
    if (res && res.success) {
        return res;
    }
    return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint, options) => {
    return fetch(`${NORMA_API}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess);
};