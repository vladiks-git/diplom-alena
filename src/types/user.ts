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
    eventType?: string | null;
}

export type IResponsible = IUser;

export interface IStudent extends IUser {
    group?: string;
    faculty?: string;
    direction?: string;
    department?: string;
    course?: string;
}
