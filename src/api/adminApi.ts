import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponsible, IStudent, IUser } from '../types/user';

const userTag = 'userTag';

// АПИ админа
export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: [userTag],
    endpoints: (builder) => ({
        createUser: builder.mutation<any, IResponsible | IStudent>({
            query: (body) => ({
                url: '/create',
                method: 'POST',
                body,
            }),
            invalidatesTags: [userTag],
        }),
        getAllUsers: builder.query<IUser[], void>({
            query: () => ({
                url: '/',
            }),
            providesTags: [userTag],
        }),
    }),
});

export const { useCreateUserMutation, useGetAllUsersQuery } = adminApi;
