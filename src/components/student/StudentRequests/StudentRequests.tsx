import React from 'react';
import Table from '../../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { IRequest } from '../../../types/student';

import './style.scss';
import { useGetApprovedEventsQuery } from '../../../api/studentApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '../../../store';
import { CheckOutlined } from '@ant-design/icons';
const columns: ColumnsType<IRequest> = [
    {
        title: 'Дата мероприятия',
        dataIndex: 'date',
    },
    {
        title: 'Тип мероприятия',
        dataIndex: 'type',
    },
    {
        title: 'Название мероприятия',
        dataIndex: 'name',
    },
    {
        title: 'Статус мероприятия',
        dataIndex: 'status',
    },
    {
        title: 'Результат мероприятия',
        dataIndex: 'result',
    },
    {
        title: 'Статус экспертизы',
        render: () => <div>Новая</div>,
    },
];

export const StudentRequests = () => {
    const { id: userId } = useAppSelector((state) => state.authSlice);

    const { events } = useGetApprovedEventsQuery(userId ? userId : skipToken, {
        selectFromResult: ({ data }) => ({
            events: data?.filter((event) => !event.isApprove) || [],
        }),
    });

    return (
        <div className={`student-requests ${events.length ? 'fill' : ''}`}>
            <p className="student-requests__new title">Новые заявки</p>
            <Table columns={columns} dataSource={events} pagination={false} />
            <p className="student-requests__reject title">Отклоненные заявки</p>
            <p>Отклоненных заявок нет</p>
        </div>
    );
};
