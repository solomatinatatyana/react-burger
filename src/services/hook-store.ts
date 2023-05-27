import {TypedUseSelectorHook,
    useSelector as useSelectorHook
} from "react-redux";

import {rootReducer} from "./reducers";

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorHook;