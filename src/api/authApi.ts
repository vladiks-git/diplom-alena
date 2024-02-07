import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponsible, IStudent, IUser } from '../types/user';

interface AuthRequest {
    login: string;
    password: string;
}

// АПИ авторизации
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
    endpoints: (builder) => ({
        auth: builder.mutation<IUser | IResponsible | IStudent, AuthRequest>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useAuthMutation } = authApi;
