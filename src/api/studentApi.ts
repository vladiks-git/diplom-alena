import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEvent } from '../types/student';

const eventTag = 'eventTag';

export const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/student' }),
    tagTypes: [eventTag],
    endpoints: (builder) => ({
        createEvent: builder.mutation({
            query: (body) => ({
                url: '/create',
                method: 'POST',
                body,
            }),
            invalidatesTags: [eventTag],
        }),
        getApprovedEvents: builder.query<IEvent[], number>({
            query: (studentId) => ({
                url: `/events?id=${studentId}`,
            }),
            providesTags: [eventTag],
        }),
    }),
});

export const { useCreateEventMutation, useGetApprovedEventsQuery } = studentApi;
