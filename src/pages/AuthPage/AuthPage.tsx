import React, { useEffect } from 'react';

import './AuthPage.scss';
import { Form } from 'antd';
import { Input } from '../../ui-kit/Input/Input';
import { Input as InputAnt } from 'antd';
import Button from '../../ui-kit/Button/Button';
import { useAuthMutation } from '../../api/authApi';
import { useForm } from 'antd/es/form/Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/authSlice';
import { Roles } from '../../consts/common';
import { useNavigate } from 'react-router';
import { IUser } from '../../types/user';

const AuthPage = () => {
    const [auth, { data, isSuccess, error }] = useAuthMutation();

    const [form] = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogin = (values: IUser) => {
        auth(values);
    };

    useEffect(() => {
        if (isSuccess) {
            const role = data?.role;

            if (role === Roles.admin) {
                navigate('/admin');
            }

            if (role === Roles.student) {
                navigate('/student');
            }

            if (role === Roles.responsible) {
                navigate('/responsible');
            }
            dispatch(
                setUser({
                    login: data?.login,
                    password: data?.password,
                    role: data?.role,
                })
            );
        }
    }, [isSuccess]);

    const isAuthError = (error: any): boolean => error?.status === 401;

    return (
        <div className={'auth__wrapper'}>
            <div className="auth__inner">
                <p className="auth__title">Вход</p>
                <Form form={form} layout={'vertical'} onFinish={handleLogin}>
                    <Form.Item
                        name={'login'}
                        label={'Пользователь'}
                        className={'auth__item'}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                        label={'Пароль'}
                        className={'auth__item'}
                    >
                        <InputAnt.Password className={'input'} />
                    </Form.Item>
                    {isAuthError(error) && (
                        <p className={'auth__error'}>
                            Неверный логин или пароль
                        </p>
                    )}
                    <div className={'auth__btn-wrapper'}>
                        <Button htmlType={'submit'}>Войти</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AuthPage;
