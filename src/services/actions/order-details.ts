import {request} from "../../utils/burger-api";

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'CHECKOUT_FAILED';

export const checkout = (data: {ingredients: string[] }): any => {
    return function (dispatch:any) {
        dispatch({
            type: CHECKOUT_REQUEST
        });
        request("/orders", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: CHECKOUT_SUCCESS,
                        order: res
                    });
                    //dispatch({type: RESET_BURGER_CONSTRUCTOR})
                } else {
                    dispatch({
                        type: CHECKOUT_FAILED
                    });
                }
            }).catch(err => {
            dispatch({type: CHECKOUT_FAILED})
        });
    };
}