import {CLOSE_MODAL} from "../actions/modal";


const initialState = {
    isOpen: false,
    resetContentModalFunc: null
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};
