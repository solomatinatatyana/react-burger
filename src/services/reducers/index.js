import {combineReducers} from "redux";
import {ingredientsReducer} from "./BurgerIngredients";
import {constructorReducer} from "./BurgerConstructor";
import {orderDetailReducer} from "./OrderDetails";
import {ingredientDetailReducer} from "./IngredientDetails";
import {modalReducer} from "./modal";

export const rootReducer = combineReducers({
    burgerIngredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    orderDetail: orderDetailReducer,
    ingredientDetail: ingredientDetailReducer,
    modal: modalReducer,
});