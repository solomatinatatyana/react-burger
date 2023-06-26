import {CLOSE_MODAL} from "../actions/modal";
import {TModalActions} from "../action-types/modal";

export type TModalState = {
    isOpen: boolean
    resetContentModalFunc: any
}

export const initialModalState: TModalState = {
    isOpen: false,
    resetContentModalFunc: null
};

export const modalReducer = (state = initialModalState, action:TModalActions): TModalState => {
    switch (action.type) {
        case CLOSE_MODAL: {
            return initialModalState;
        }
        default: {
            return state;
        }
    }
};
