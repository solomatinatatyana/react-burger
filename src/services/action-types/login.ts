export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';


export interface ILoginRequest {
    readonly type: typeof LOGIN_REQUEST
}


export type TLoginActions = ILoginRequest