import React, { useEffect, useState } from 'react';
import Button from '../../../ui-kit/Button/Button';
import { PlusCircleOutlined } from '@ant-design/icons';

import './style.scss';
import Table from '../../../ui-kit/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { IEvent } from '../../../types/student';
import { Modal } from '../../../ui-kit/Modal/Modal';
import { Form } from 'antd';
import { Select } from '../../../ui-kit/Select/Select';
import { Input } from '../../../ui-kit/Input/Input';
import { DatePicker } from '../../../ui-kit/DatePicker/DatePicker';
import { RadioGroup } from '../../../ui-kit/RadioGroup/RadioGroup';
import { useForm } from 'antd/es/form/Form';
import { EventStatuses, EventTypeOptions } from '../../../consts/common';
import { Dayjs } from 'dayjs';
import { getFormattedDate } from '../../../utils/common';
import {
    useCreateEventMutation,
    useGetApprovedEventsQuery,
} from '../../../api/studentApi';
import { useAppSelector } from '../../../store';
import { skipToken } from '@reduxjs/toolkit/query';

const columns: ColumnsType<IEvent> = [
    {
        title: 'Дата мероприятия',
        dataIndex: 'date',
    },
    {
        title: 'Тип мероприятия',
        dataIndex: 'type',
    },
    {
        title: 'Название мероприятия',
        dataIndex: 'name',
    },
    {
        title: 'Статус мероприятия',
        dataIndex: 'status',
    },
    {
        title: 'Результат мероприятия',
        dataIndex: 'result',
    },
    {
        title: 'Баллы',
        dataIndex: 'points',
    },
];
//
// const testData: IEvent[] = [
//     {
//         points: 10,
//         name: 'name',
//         result: 'resukt',
//         type: 'type',
//         status: 'status',
//     },
// ];

const radioOptions = [
    {
        value: 'Награда',
        title: 'Награда',
    },
    {
        value: 'Участие',
        title: 'Участие',
    },
];

type FromDataType = Partial<Omit<IEvent, 'date'>> & { date: Dayjs | null };

const initialFormData: FromDataType = {
    date: null,
    type: undefined,
    name: '',
    result: 'Награда',
    award: '',
    status: undefined,
};

export const StudentEvents = () => {
    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const [form] = useForm();

    const [createEvent, { isSuccess }] = useCreateEventMutation();

    const { id: userId } = useAppSelector((state) => state.authSlice);

    const { data: events = [] } = useGetApprovedEventsQuery(
        userId ? userId : skipToken
    );

    useEffect(() => {
        if (isSuccess) {
            handleCloseAdd();
            form.resetFields();
        }
    }, [isSuccess]);

    const handleOpenAdd = () => setIsOpenAdd(true);
    const handleCloseAdd = () => {
        setIsOpenAdd(false);
        form.resetFields();
    };

    const handleFinish = (values: FromDataType) => {
        const newEvent = {
            ...values,
            date: getFormattedDate(values.date),
            userId: userId,
        };
        createEvent(newEvent);
    };

    const getTotalPoints = () => {
        return events.reduce((total, cur) => {
            if (!cur.points) return total;
            return total + cur.points;
        }, 0);
    };

    return (
        <div className={'events'}>
            <div className="events__header">
                <Button onClick={handleOpenAdd} icon={<PlusCircleOutlined />}>
                    Добавить мероприятие
                </Button>
            </div>
            <p className="events__title title">Участие в мероприятиях</p>
            <Table
                dataSource={events}
                columns={columns}
                pagination={false}
                footer={() => (
                    <div className={'events__table-footer'}>
                        <p>Итого</p>
                        <div>{getTotalPoints()}</div>
                    </div>
                )}
            />
            <Modal
                width={441}
                title={'Добавление мероприятия'}
                open={isOpenAdd}
                onCancel={handleCloseAdd}
            >
                <Form
                    layout={'vertical'}
                    form={form}
                    onFinish={handleFinish}
                    initialValues={initialFormData}
                >
                    <Form.Item
                        label={'Тип мероприятия'}
                        className={'events__form-item'}
                        name={'type'}
                    >
                        <Select
                            options={EventTypeOptions}
                            placeholder={'Выбрать тип мероприятия'}
                        />
                    </Form.Item>
                    <Form.Item
                        label={'Название мероприятия'}
                        className={'events__form-item'}
                        name={'name'}
                    >
                        <Input placeholder={'Впишите название мероприятия'} />
                    </Form.Item>
                    <Form.Item
                        label={'Статус мероприятия'}
                        className={'events__form-item'}
                        name={'status'}
                    >
                        <Select
                            options={EventStatuses}
                            placeholder={'Выбрать статус мероприятия'}
                        />
                    </Form.Item>
                    <Form.Item
                        label={'Дата мероприятия'}
                        className={'events__form-item'}
                        name={'date'}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label={'Результат мероприятия'}
                        className={'events__form-item'}
                        name={'result'}
                    >
                        <RadioGroup options={radioOptions} />
                    </Form.Item>
                    <Form.Item
                        label={'Вид награды'}
                        className={'events__form-item'}
                        name={'award'}
                    >
                        <Input placeholder={'Впишите вид награды'} />
                    </Form.Item>
                    <div className="events__btns">
                        <Button type={'default'}>Отменить</Button>
                        <Button htmlType={'submit'}>
                            Добавить мероприятие
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};
