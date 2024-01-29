import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponsible, IStudent } from '../types/user';

const userTag = 'userTag';
export const userApi = createApi({
    reducerPath: 'userApi',
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
        getAllUsers: builder.query({
            query: () => ({
                url: '/',
            }),
            providesTags: [userTag],
        }),
    }),
});

export const { useCreateUserMutation, useGetAllUsersQuery } = userApi;
