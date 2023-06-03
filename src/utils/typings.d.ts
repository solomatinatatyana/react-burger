declare namespace MODEL {

    /** Ингредиенты **/
    export type TIngredient = {
        id:string
        _id: string
        name: string
        type: string
        calories: number
        proteins: number
        fat: number
        carbohydrates: number
        image: string
        image_mobile?: string
        image_large?: string
        count: number
        price: number
        __v: number
    }

    /** Заказ **/
    export type TOrder = {
        name: string;
        ingredients: string[];
        _id: string;
        status: string;
        number: number;
        createdAt: string;
        updatedAt: string;
    }

    /** Пользователь **/
    export type TUser = {
        name: string
        email: string;
    }

    /** API **/

    export type TOrderRs = {
        success: boolean
        name: string
        order: {number: string}
    }

    export type TIngredientsRs = {
        success: boolean;
        data: Array<TIngredient>;
    };

    export type TTokensRs = {
        success: boolean;
        accessToken: string;
        refreshToken: string;
    }

    export type TUserRs = {
        success: boolean;
        user: TUser;
    }

    export type TAuthRs = {
        success: boolean;
        user: TUser;
        accessToken: string;
        refreshToken: string;
    }

    export type TLogoutRs = {
        success: boolean;
        message: string;
    }

    export type TForgotPasswordRs = {
        success: boolean;
        message: string;
    }

    export type TResetPasswordRs = {
        success: boolean;
        message: string;
    }

}