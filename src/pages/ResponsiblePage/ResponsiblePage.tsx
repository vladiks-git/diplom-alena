import React from 'react';
import Table from '../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { IRequest } from '../../types/student';
import Header from '../../components/Header/Header';

const columns: ColumnsType<IRequest> = [
    {
        title: 'Курс-Факультет-Группа',
        dataIndex: '',
    },
    {
        title: 'ФИО',
        dataIndex: 'fio',
    },
    {
        title: 'Дата мероприятия',
        dataIndex: 'name',
    },
    {
        title: 'Название мероприятия',
        dataIndex: 'status',
    },
    {
        title: 'Статус мероприятия',
        dataIndex: 'result',
    },
    {
        title: 'Результат мероприятия',
        dataIndex: 'status_expertise',
    },
    {
        title: 'Результат мероприятия',
        dataIndex: 'Статус экспертизы',
    },
    {
        title: 'Результат мероприятия',
        dataIndex: 'Действия',
    },
];

const navLinks = [
    {
        path: 'responsible',
        title: 'Заявки',
    },
];

const ResponsiblePage = () => {
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
                <Table />
            </div>
        </div>
    );
};

export default ResponsiblePage;
