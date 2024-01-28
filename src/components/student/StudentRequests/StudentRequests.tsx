import React from 'react';
import Table from '../../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { IRequest } from '../../../types/student';

import './style.scss';
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
        dataIndex: 'status_expertise',
    },
];

const testData: IRequest[] = [
    {
        date: 'test date',
        status_expertise: 'status expertice',
        name: 'name',
        result: 'resukt',
        type: 'type',
        status: 'status',
    },
];

export const StudentRequests = () => {
    return (
        <div className={'student-requests'}>
            <p className="student-requests__new title">Новые заявки</p>
            <Table columns={columns} dataSource={testData} pagination={false} />
            <p className="student-requests__reject title">Отклоненные заявки</p>
            <p>Отклоненных заявок нет</p>
        </div>
    );
};
