export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';


export interface IForgotPasswordRequest {
    readonly type: typeof FORGOT_PASSWORD_REQUEST
}


export type TForgotPasswordActions = IForgotPasswordRequest