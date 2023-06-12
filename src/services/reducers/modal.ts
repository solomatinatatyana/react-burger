import {CLOSE_MODAL} from "../actions/modal";
import {TModalActions} from "../action-types/modal";

export type TModalState = {
    isOpen: boolean
    resetContentModalFunc: any
}

const initialState: TModalState = {
    isOpen: false,
    resetContentModalFunc: null
};

export const modalReducer = (state = initialState, action:TModalActions): TModalState => {
    switch (action.type) {
        case CLOSE_MODAL: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};
