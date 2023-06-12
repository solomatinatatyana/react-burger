export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';


export interface ILogoutRequest {
    readonly type: typeof LOGOUT_REQUEST
}


export type TLogoutActions = ILogoutRequest