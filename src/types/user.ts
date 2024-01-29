import { Roles } from '../consts/common';
import { Dayjs } from 'dayjs';

export interface IUser {
    id?: number;
    role: string;
    fio: string;
    birthday: string;
    phone: string;
    email: string;
    login: string;
    password: string;
}

export interface IResponsible extends IUser {
    eventType: string;
}

export interface IStudent extends IUser {
    group: string;
    faculty: string;
    direction: string;
    department: string;
}
