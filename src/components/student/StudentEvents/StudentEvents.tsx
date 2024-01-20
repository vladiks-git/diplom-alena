import React from 'react';
import Button from '../../../ui-kit/Button/Button';
import { PlusCircleOutlined } from '@ant-design/icons';

import './style.scss';
import Table from '../../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { IEvent } from '../../../types/student';

const columns: ColumnsType<IEvent> = [
    {
        title: 'Дата мероприятия',
        dataIndex: 'date',
    },
    {
        title: 'Тип мероприятия',
        dataIndex: 'type',
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
        title: 'Баллы',
        dataIndex: 'points',
    },
];

const testData: IEvent[] = [
    {
        points: 10,
        name: 'name',
        result: 'resukt',
        type: 'type',
        status: 'status',
    },
];

export const StudentEvents = () => {
    return (
        <div className={'events'}>
            <div className="events__header">
                <Button icon={<PlusCircleOutlined />}>
                    Добавить мероприятие
                </Button>
            </div>
            <p className="events__title">Участие в мероприятиях</p>
            <Table
                columns={columns}
                dataSource={testData}
                pagination={false}
                footer={() => <div>total points 88</div>}
            />
        </div>
    );
};
