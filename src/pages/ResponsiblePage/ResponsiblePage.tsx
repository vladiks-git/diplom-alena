import React from 'react';
import Table from '../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import Header from '../../components/Header/Header';
import {
    useApproveEventMutation,
    useGetNotApprovedEventsQuery,
} from '../../api/responsibleApi';
import { CheckOutlined } from '@ant-design/icons';

import './style.scss';
import { useAppSelector } from '../../store';

const navLinks = [
    {
        path: '/responsible',
        title: 'Заявки',
    },
];

// Компонент страницы ответственного
const ResponsiblePage = () => {
    const { eventType } = useAppSelector((state) => state.authSlice);

    const { events } = useGetNotApprovedEventsQuery(undefined, {
        refetchOnMountOrArgChange: true,
        selectFromResult: ({ data }) => ({
            events: data?.filter((event) => event.type === eventType) || [],
        }),
    });

    const [approveEvent] = useApproveEventMutation();

    const columns: ColumnsType<any> = [
        {
            title: 'Курс-Факультет-Группа',
            dataIndex: 'cfg',
        },
        {
            title: 'ФИО',
            dataIndex: 'fio',
        },
        {
            title: 'Дата мероприятия',
            dataIndex: 'date',
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
            render: () => <div>Новое</div>,
        },
        {
            title: 'Действия',
            dataIndex: 'id',
            render: (id: number) => (
                <div onClick={() => approveEvent(id)} className={'action'}>
                    <CheckOutlined />
                </div>
            ),
        },
    ];

    return (
        <div className={'responsible'}>
            <Header links={navLinks} />
            <div className="container">
                <p
                    style={{ margin: '16px 0px' }}
                    className="responsible__title title"
                >
                    Заявки
                </p>
                <Table
                    columns={columns}
                    dataSource={events}
                    pagination={false}
                />
            </div>
        </div>
    );
};

export default ResponsiblePage;
