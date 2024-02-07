import React, { FC, useEffect } from 'react';
import { Modal } from '../../../ui-kit/Modal/Modal';
import { Form } from 'antd';
import { RadioGroup } from '../../../ui-kit/RadioGroup/RadioGroup';
import { Input } from '../../../ui-kit/Input/Input';
import { DatePicker } from '../../../ui-kit/DatePicker/DatePicker';
import { Select } from '../../../ui-kit/Select/Select';

import './style.scss';
import Button from '../../../ui-kit/Button/Button';
import { useForm, useWatch } from 'antd/es/form/Form';
import {
    CourseOptions,
    DepartamentOptions,
    DirectionOptions,
    EventTypeOptions,
    FacultiesOptions,
    GroupOptions,
    Roles,
} from '../../../consts/common';
import { IResponsible, IStudent, IUser } from '../../../types/user';
import { getFormattedDate } from '../../../utils/common';
import { Dayjs } from 'dayjs';
import { useCreateUserMutation } from '../../../api/adminApi';
import { toast } from 'react-toastify';

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

const initialFormData: StudentFormData | ResponsibleFormData = {
    role: Roles.responsible,
    birthday: null,
    password: '',
    login: '',
    department: undefined,
    direction: undefined,
    email: '',
    fio: '',
    eventType: undefined,
    faculty: undefined,
    group: undefined,
    phone: '',
};

type StudentFormData = Omit<IStudent, 'birthday'> & { birthday: Dayjs | null };
type ResponsibleFormData = Omit<IResponsible, 'birthday'> & {
    birthday: Dayjs | null;
};

// Компонент добавления пользователей
const AddUser: FC<IAddUserProps> = ({ isOpen, onClose }) => {
    const [form] = useForm();

    const [createUser, { isSuccess }] = useCreateUserMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success('Успешно создано');
            handleClose();
        }
    }, [isSuccess]);

    const role = useWatch('role', form);

    const handleFinish = (values: ResponsibleFormData | StudentFormData) => {
        const newUser: IUser | IResponsible | IStudent = {
            ...values,
            birthday: getFormattedDate(values.birthday),
        };
        createUser(newUser);
    };

    const handleClose = () => {
        onClose();
        form.resetFields();
    };

    const renderStudentControls = () => (
        <>
            <Form.Item
                name={'group'}
                label={'Группа'}
                className={'add-user__form-item'}
                required
            >
                <Select
                    placeholder={'Выберите группу'}
                    options={GroupOptions}
                />
            </Form.Item>
            <Form.Item
                name={'faculty'}
                label={'Факультет'}
                className={'add-user__form-item'}
                required
            >
                <Select
                    placeholder={'Выберите факультет'}
                    options={FacultiesOptions}
                />
            </Form.Item>
            <Form.Item
                name={'direction'}
                label={'Направление'}
                className={'add-user__form-item'}
                required
            >
                <Select
                    placeholder={'Направление'}
                    options={DirectionOptions}
                />
            </Form.Item>
            <Form.Item
                name={'department'}
                label={'Кафедра'}
                className={'add-user__form-item'}
                required
            >
                <Select
                    placeholder={'Выберите кафедру'}
                    options={DepartamentOptions}
                />
            </Form.Item>
            <Form.Item
                name={'course'}
                label={'Курс'}
                className={'add-user__form-item'}
                required
            >
                <Select placeholder={'Выберите курс'} options={CourseOptions} />
            </Form.Item>
        </>
    );

    const isStudent = role === Roles.student;

    return (
        <Modal destroyOnClose={true} onCancel={handleClose} open={isOpen}>
            <p className="add-user__title title">Добавление пользователя</p>
            <Form
                layout={'vertical'}
                form={form}
                onFinish={handleFinish}
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
                    required
                >
                    <Input placeholder={'ФИО'} />
                </Form.Item>

                <Form.Item
                    label={'Дата рождения'}
                    className={'add-user__form-item'}
                    name={'birthday'}
                    required
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={'phone'}
                    label={'Номер телефона'}
                    required
                    className={'add-user__form-item'}
                >
                    <Input placeholder={'Впишите номер телефона'} />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label={'Почта'}
                    className={'add-user__form-item'}
                    required
                >
                    <Input placeholder={'Впишите почту'} />
                </Form.Item>
                {isStudent && renderStudentControls()}
                {!isStudent && (
                    <Form.Item
                        label={'Ответственный за тип мероприятия'}
                        className={'add-user__form-item'}
                        required
                        name={'eventType'}
                    >
                        <Select
                            defaultActiveFirstOption={true}
                            options={EventTypeOptions}
                            placeholder={'Выберите тип мероприятия'}
                        />
                    </Form.Item>
                )}

                <Form.Item
                    name={'login'}
                    label={'Логин'}
                    className={'add-user__form-item'}
                    required
                >
                    <Input placeholder={'Впишите логин'} />
                </Form.Item>
                <Form.Item
                    name={'password'}
                    label={'Пароль'}
                    className={'add-user__form-item'}
                    required
                >
                    <Input placeholder={'Впишите пароль'} />
                </Form.Item>
                <div className="add-user__btns">
                    <Button onClick={handleClose} type={'default'}>
                        Отменить
                    </Button>
                    <Button htmlType={'submit'}>Добавить пользователя</Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddUser;
