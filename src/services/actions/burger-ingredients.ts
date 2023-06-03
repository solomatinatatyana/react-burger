import {request} from "../../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const RESET_COUNT_BUN = 'RESET_COUNT_BUN';


export const getAllIngredients = ():any => {
    return function (dispatch:any) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        request("/ingredients", {
            method: "GET"
        })
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredients: res.data
                    });
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAILED
                    });
                }
            }).catch(err => {
            dispatch({type: GET_INGREDIENTS_FAILED})
        });
    };
}

export const resetCountBun = (id:string) => {
    return {
        type: RESET_COUNT_BUN,
        _id: id
    }
};

