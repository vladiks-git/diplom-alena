import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
    endpoints: (builder) => ({
        auth: builder.mutation<any, any>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useAuthMutation } = authApi;
