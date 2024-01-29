import React, { FC } from 'react';
import { Modal } from '../../../ui-kit/Modal/Modal';
import { Form } from 'antd';
import { RadioGroup } from '../../../ui-kit/RadioGroup/RadioGroup';
import { Input } from '../../../ui-kit/Input/Input';
import { DatePicker } from '../../../ui-kit/DatePicker/DatePicker';
import { Select } from '../../../ui-kit/Select/Select';

import './style.scss';
import Button from '../../../ui-kit/Button/Button';
import { useForm, useWatch } from 'antd/es/form/Form';
import { Roles } from '../../../consts/common';

interface IAddUserProps {
    isOpen: boolean;
    onClose: () => void;
}

const radioOptions = [
    {
        value: Roles.student,
        title: 'Студент',
    },
    {
        value: Roles.responsible,
        title: 'Ответственный',
    },
];

const initialFormData = {
    role: Roles.responsible,
};

const AddUser: FC<IAddUserProps> = ({ isOpen, onClose }) => {
    const [form] = useForm();

    const type = useWatch('type', form);

    const renderStudentControls = () => (
        <>
            <Form.Item
                name={'group'}
                label={'Группа'}
                className={'add-user__form-item'}
            >
                <Select placeholder={'Выберите группу'} options={[]} />
            </Form.Item>
            <Form.Item
                name={'faculty'}
                label={'Факультет'}
                className={'add-user__form-item'}
            >
                <Select placeholder={'Выберите факультет'} options={[]} />
            </Form.Item>
            <Form.Item
                name={'direction'}
                label={'Направление'}
                className={'add-user__form-item'}
            >
                <Select placeholder={'Направление'} options={[]} />
            </Form.Item>
            <Form.Item
                name={'department'}
                label={'Кафедра'}
                className={'add-user__form-item'}
            >
                <Select placeholder={'Выберите кафедру'} options={[]} />
            </Form.Item>
        </>
    );

    const isStudent = type === Roles.student;

    return (
        <Modal onCancel={onClose} open={isOpen}>
            <p className="add-user__title title">Добавление пользователя</p>
            <Form
                layout={'vertical'}
                form={form}
                initialValues={initialFormData}
            >
                <Form.Item
                    name={'role'}
                    label={'Выберете тип пользователя'}
                    className={'add-user__form-item'}
                >
                    <RadioGroup options={radioOptions} />
                </Form.Item>
                <Form.Item
                    name={'fio'}
                    label={'ФИО'}
                    className={'add-user__form-item'}
                >
                    <Input placeholder={'ФИО'} />
                </Form.Item>

                <Form.Item
                    label={'Дата рождения'}
                    className={'add-user__form-item'}
                    name={'birthday'}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={'phone'}
                    label={'Номер телефона'}
                    className={'add-user__form-item'}
                >
                    <Input placeholder={'Впишите номер телефона'} />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label={'Почта'}
                    className={'add-user__form-item'}
                >
                    <Input placeholder={'Впишите почту'} />
                </Form.Item>
                {isStudent && renderStudentControls()}
                {!isStudent && (
                    <Form.Item
                        label={'Ответственный за тип мероприятия'}
                        className={'add-user__form-item'}
                    >
                        <Select
                            options={[]}
                            placeholder={'Выберите тип мероприятия'}
                        />
                    </Form.Item>
                )}

                <Form.Item
                    name={'login'}
                    label={'Логин'}
                    className={'add-user__form-item'}
                >
                    <Input placeholder={'Впишите логин'} />
                </Form.Item>
                <Form.Item
                    name={'password'}
                    label={'Пароль'}
                    className={'add-user__form-item'}
                >
                    <Input placeholder={'Впишите пароль'} />
                </Form.Item>
                <div className="add-user__btns">
                    <Button type={'default'}>Отменить</Button>
                    <Button>Добавить пользователя</Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddUser;
