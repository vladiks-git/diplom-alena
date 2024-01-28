import React from 'react';
import Header from '../../components/Header/Header';

const navLinks = [
    {
        path: 'students',
        title: 'Список студентов',
    },
];

export const AdminPage = () => {
    return (
        <div>
            <Header links={navLinks} />
        </div>
    );
};
