import {checkResponse, NORMA_API} from "../../utils/burger-api";

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'CHECKOUT_FAILED';

export const checkout = (data) =>{
    return function(dispatch) {
        dispatch({
            type: CHECKOUT_REQUEST
        });
        fetch(`${NORMA_API}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(checkResponse)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: CHECKOUT_SUCCESS,
                        order: res
                    });
                } else {
                    dispatch({
                        type: CHECKOUT_FAILED
                    });
                }
            }).catch(err=>{
            dispatch({type: CHECKOUT_FAILED})
        });
    };
}