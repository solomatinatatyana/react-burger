export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';


export interface IResetPasswordRequest {
    readonly type: typeof RESET_PASSWORD_REQUEST
}


export type TResetPasswordActions = IResetPasswordRequest