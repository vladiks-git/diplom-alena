import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../ui-kit/Button/Button';
import Table from '../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { IUser } from '../../types/user';
import './style.scss';
import AddUser from '../../components/admin/AddUser/AddUser';

const navLinks = [
    {
        path: 'students',
        title: 'Список студентов',
    },
];

const columns: ColumnsType<IUser> = [
    {
        title: 'ФИЩ',
        dataIndex: 'fio',
    },
    {
        title: 'Роль',
        dataIndex: 'role',
    },
];

const testData: Partial<IUser>[] = [
    {
        fio: 'test fio',
        role: 'role',
    },
];

export const AdminPage = () => {
    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const handleOpenAdd = () => setIsOpenAdd(true);
    const handleCloseAdd = () => setIsOpenAdd(false);

    return (
        <div className={'admin-page'}>
            <Header links={navLinks} />
            <div className={'container'}>
                <Button
                    onClick={handleOpenAdd}
                    className={'admin-page__add-btn'}
                >
                    Добавить нового пользователя
                </Button>
                <p className="admin-page__title title">Пользователи</p>
                <Table
                    columns={columns}
                    dataSource={testData}
                    pagination={false}
                />
            </div>
            <AddUser isOpen={isOpenAdd} onClose={handleCloseAdd} />
        </div>
    );
};
