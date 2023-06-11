import {request} from "../../utils/burger-api";
import {IResetCountBun} from "../action-types/burger-ingredients";
import {AppDispatch, AppThunk} from "../hook-store";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const RESET_COUNT_BUN = 'RESET_COUNT_BUN';


export const getAllIngredients = () : AppThunk => {
    return function (dispatch:AppDispatch) {
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

export const resetCountBun = (id:string): IResetCountBun => {
    return {
        type: RESET_COUNT_BUN,
        _id: id
    }
};

