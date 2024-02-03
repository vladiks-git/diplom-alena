import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../ui-kit/Button/Button';
import Table from '../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { IUser } from '../../types/user';
import './style.scss';
import AddUser from '../../components/admin/AddUser/AddUser';
import { useGetAllUsersQuery } from '../../api/adminApi';
import { Roles, RussianRoles } from '../../consts/common';

const navLinks = [
    {
        path: '/admin',
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

export const AdminPage = () => {
    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const { data: users = [] } = useGetAllUsersQuery();

    const handleOpenAdd = () => setIsOpenAdd(true);
    const handleCloseAdd = () => setIsOpenAdd(false);

    const filteredUsers = users
        .filter((user) => user.role !== Roles.admin)
        .map((user) => {
            return { ...user, role: RussianRoles[user.role as Roles] };
        });

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
                    dataSource={filteredUsers}
                    pagination={false}
                />
            </div>
            <AddUser isOpen={isOpenAdd} onClose={handleCloseAdd} />
        </div>
    );
};
