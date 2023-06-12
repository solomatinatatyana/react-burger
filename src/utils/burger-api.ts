export const NORMA_API = "https://norma.nomoreparties.space/api"
export const WS_BASE_URL = 'wss://norma.nomoreparties.space/orders';

export const checkResponse = (res: Response): Promise<any> => {
    return res.ok ? res.json() : res.json()
        .then((err) => Promise.reject(err));
};


export const checkSuccess = (res: any): Promise<any> => {
    if (res && res.success) {
        return res;
    }
    return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint: string, options?: object | undefined): Promise<any> => {
    return fetch(`${NORMA_API}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess);
};