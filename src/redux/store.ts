import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/userSlice.ts";

const rootReducer = combineReducers({
    users: userReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];