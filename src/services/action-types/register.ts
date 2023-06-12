export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';


export interface IRegisterRequest {
    readonly type: typeof REGISTER_REQUEST
}
export interface IRegisterSuccess {
    readonly type: typeof REGISTER_SUCCESS;
}



export type TRegisterActions = IRegisterRequest | IRegisterSuccess