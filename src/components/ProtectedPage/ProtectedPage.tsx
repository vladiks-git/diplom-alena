import React, { FC, PropsWithChildren, useCallback } from 'react';
import { useAppSelector } from '../../store';
import { Roles } from '../../consts/common';
import { Navigate } from 'react-router';

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
    const { role } = useAppSelector((state) => state.authSlice);

    const isAuth = !!role;

    console.log(role);

    const getPathByRole = useCallback(() => {
        if (role === Roles.student) return '/student';
        if (role === Roles.responsible) return '/responsible';
        if (role === Roles.admin) return '/admin';
        console.log('no auth');
        return '/auth';
    }, [role]);

    return isAuth ? <>{children}</> : <Navigate to={getPathByRole()} />;
};

export default ProtectedPage;
