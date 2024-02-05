import { createSlice } from '@reduxjs/toolkit';
import { IResponsible, IStudent, IUser } from '../types/user';

const initialState: Partial<IUser> | Partial<IResponsible> | Partial<IStudent> =
    {
        login: '',
        password: '',
        role: '',
        id: undefined,
    };

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                login: action.payload.login,
                password: action.payload.password,
                role: action.payload.role,
                id: action.payload.id,
                eventType: action.payload.eventType,
            };
        },
        logOut: (state) => initialState,
    },
});

export const { setUser, logOut } = authSlice.actions;
