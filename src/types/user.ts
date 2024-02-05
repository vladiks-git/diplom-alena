import { Roles } from '../consts/common';

export interface IUser {
    id?: number;
    role: Roles | string;
    fio: string;
    birthday: string;
    phone: string;
    email: string;
    login: string;
    password: string;
}

export interface IResponsible extends IUser {
    eventType?: string;
}

export interface IStudent extends IUser {
    group?: string;
    faculty?: string;
    direction?: string;
    department?: string;
    course?: string;
}
