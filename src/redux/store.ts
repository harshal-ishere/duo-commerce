import {configureStore} from "@reduxjs/toolkit";
// import { counter } from "./features/toggleSlice";
import toggleReducer from "./features/toggleSlice";
import toggle2Reducer from "./features/toggle2Slice";
export const store=configureStore({
    reducer:{
        toggle:toggleReducer ,
        toggle2:toggle2Reducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

