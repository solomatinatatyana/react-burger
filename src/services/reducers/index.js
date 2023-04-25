import {combineReducers} from "redux";
import {ingredientsReducer} from "./burger-ingredients";
import {constructorReducer} from "./burger-constructor";
import {orderDetailReducer} from "./order-details";
import {ingredientDetailReducer} from "./ingredient-details";
import {modalReducer} from "./modal";

export const rootReducer = combineReducers({
    burgerIngredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    orderDetail: orderDetailReducer,
    ingredientDetail: ingredientDetailReducer,
    modal: modalReducer,
});