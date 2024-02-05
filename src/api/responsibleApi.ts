import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEvent } from '../types/student';

const eventTag = 'eventTag';

export const responsibleApi = createApi({
    reducerPath: 'responsibleApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/responsible' }),
    tagTypes: [eventTag],
    endpoints: (builder) => ({
        getNotApprovedEvents: builder.query<IEvent[], void | undefined>({
            query: () => ({
                url: '/',
            }),
            providesTags: [eventTag],
        }),
        approveEvent: builder.mutation<any, number>({
            query: (eventId) => ({
                url: `/approve`,
                method: 'POST',
                body: {
                    eventId,
                },
            }),
            invalidatesTags: [eventTag],
        }),
    }),
});

export const { useApproveEventMutation, useGetNotApprovedEventsQuery } =
    responsibleApi;
