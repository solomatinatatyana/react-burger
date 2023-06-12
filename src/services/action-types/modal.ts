export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';

export interface ICloseModalAction {
    readonly type: typeof CLOSE_MODAL;
}

export type TModalActions = ICloseModalAction;
