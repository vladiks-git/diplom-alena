import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';

const navLinks = [
    {
        path: 'requests',
        title: 'Заявки',
    },
    {
        path: 'events',
        title: 'Участие в мероприятиях',
    },
];

export const StudentPage = () => {
    return (
        <div>
            <Header links={navLinks} />
            <div className={'container'}>
                <Outlet />
            </div>
        </div>
    );
};
