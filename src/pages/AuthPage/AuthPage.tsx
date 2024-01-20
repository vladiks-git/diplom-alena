import React from 'react';

import './AuthPage.scss';
import { Form } from 'antd';
import { Input } from '../../ui-kit/Input/Input';
import { Input as InputAnt } from 'antd';
import Button from '../../ui-kit/Button/Button';

const AuthPage = () => {
    return (
        <div className={'auth__wrapper'}>
            <div className="auth__inner">
                <p className="auth__title">Вход</p>
                <Form layout={'vertical'}>
                    <Form.Item label={'Пользователь'} className={'auth__item'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={'Пароль'} className={'auth__item'}>
                        <InputAnt.Password className={'input'} />
                    </Form.Item>
                    <div className={'auth__btn-wrapper'}>
                        <Button>Войти</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AuthPage;
