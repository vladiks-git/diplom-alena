import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { authSlice } from './slices/authSlice';
import { userApi } from './api/userApi';

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
