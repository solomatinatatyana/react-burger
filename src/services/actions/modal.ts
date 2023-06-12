import {ICloseModalAction} from "../action-types/modal";

export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = (): ICloseModalAction => ({type: CLOSE_MODAL});
