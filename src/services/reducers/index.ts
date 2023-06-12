import {combineReducers} from "redux";
import {ingredientsReducer} from "./burger-ingredients";
import {constructorReducer} from "./burger-constructor";
import {orderDetailReducer} from "./order-details";
import {ingredientDetailReducer} from "./ingredient-details";
import {modalReducer} from "./modal";
import {loginReducer} from "./login";
import {registerReducer} from "./register";
import {profileReducer} from "./profile";
import {forgotPasswordReducer} from "./forgot-password";
import {resetPasswordReducer} from "./reset-password";
import {wsReducer} from "./ws";
import {wsAuthReducer} from "./wsAuth";

export const rootReducer = combineReducers({
    burgerIngredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    orderDetail: orderDetailReducer,
    ingredientDetail: ingredientDetailReducer,
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    modal: modalReducer,
    ws: wsReducer,
    wsAuth: wsAuthReducer
});