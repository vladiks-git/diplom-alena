import {
    configureStore,
    isRejectedWithValue,
    Middleware,
    MiddlewareAPI,
} from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { authSlice } from './slices/authSlice';
import { adminApi } from './api/adminApi';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { studentApi } from './api/studentApi';

const rtkQueryErrorMiddleware: Middleware =
    (api: MiddlewareAPI) => (next) => (action: any) => {
        // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
        const status = action?.payload?.status;
        if (isRejectedWithValue(action) && status !== 401) {
            toast.error('Ошибка на сервере!');
        }

        return next(action);
    };

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [studentApi.reducerPath]: studentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(adminApi.middleware)
            .concat(studentApi.middleware)
            .concat(rtkQueryErrorMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
