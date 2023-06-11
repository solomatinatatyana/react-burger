import {TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as useSelectorHook,} from "react-redux";

import {rootReducer} from "./reducers";
import {TBurgerConstructorActions} from "./action-types/burger-constructor";
import {TWSActions} from "./action-types/ws";
import {TWSAuthActions} from "./action-types/wsAuth";
import {TBurgerIngredientsActions} from "./action-types/burger-ingredients";
import {TModalActions} from "./action-types/modal";
import {TOrderActions} from "./action-types/order-details";
import {ThunkAction} from "redux-thunk";
import {TForgotPasswordActions} from "./action-types/forgot-password";
import {TIngredientDetailsActions} from "./action-types/ingredient-details";
import {TResetPasswordActions} from "./action-types/resetPassword";
import {TLoginActions} from "./action-types/login";
import {TLogoutActions} from "./action-types/logout";
import {TRegisterActions} from "./action-types/register";
import {TProfileActions} from "./action-types/profile";
import type {} from "redux-thunk/extend-redux";

export type TAppActions = TBurgerConstructorActions | TBurgerIngredientsActions | TModalActions | TOrderActions
    | TForgotPasswordActions | TIngredientDetailsActions | TResetPasswordActions
    | TLoginActions | TLogoutActions | TRegisterActions | TProfileActions
    | TWSActions | TWSAuthActions;


export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;


export type AppDispatch<TReturnType = void> = (action: TAppActions | AppThunk<TReturnType>) => TReturnType;

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorHook;

export const useDispatch: () => AppDispatch = dispatchHook;
