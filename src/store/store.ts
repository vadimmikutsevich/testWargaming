import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shipSlice from "./reducers/ShipsSlice";

const rootReducer = combineReducers({
    shipSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type Store = ReturnType<typeof setupStore>
export type Dispatch = Store['dispatch']