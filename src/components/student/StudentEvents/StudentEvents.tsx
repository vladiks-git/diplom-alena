import React, { useState } from 'react';
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

const testData: IEvent[] = [
    {
        points: 10,
        name: 'name',
        result: 'resukt',
        type: 'type',
        status: 'status',
    },
];

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

export const StudentEvents = () => {
    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const handleOpenAdd = () => setIsOpenAdd(true);
    const handleCloseAdd = () => setIsOpenAdd(false);

    return (
        <div className={'events'}>
            <div className="events__header">
                <Button onClick={handleOpenAdd} icon={<PlusCircleOutlined />}>
                    Добавить мероприятие
                </Button>
            </div>
            <p className="events__title">Участие в мероприятиях</p>
            <Table
                columns={columns}
                dataSource={testData}
                pagination={false}
                footer={() => <div>total points 88</div>}
            />
            <Modal
                width={441}
                title={'Добавление мероприятия'}
                open={isOpenAdd}
                onCancel={handleCloseAdd}
            >
                <Form layout={'vertical'}>
                    <Form.Item
                        label={'Тип мероприятия'}
                        className={'events__form-item'}
                    >
                        <Select
                            options={[]}
                            placeholder={'Выбрать тип мероприятия'}
                        />
                    </Form.Item>
                    <Form.Item
                        label={'Тип мероприятия'}
                        className={'events__form-item'}
                    >
                        <Input placeholder={'Впишите название мероприятия'} />
                    </Form.Item>
                    <Form.Item
                        label={'Статус мероприятия'}
                        className={'events__form-item'}
                    >
                        <Select
                            options={[]}
                            placeholder={'Выбрать статус мероприятия'}
                        />
                    </Form.Item>
                    <Form.Item
                        label={'Статус мероприятия'}
                        className={'events__form-item'}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label={'Результат мероприятия'}
                        className={'events__form-item'}
                    >
                        <RadioGroup options={radioOptions} />
                    </Form.Item>
                    <Form.Item
                        label={'Вид награды'}
                        className={'events__form-item'}
                    >
                        <Input placeholder={'Впишите вид награды'} />
                    </Form.Item>
                    <div className="events__btns">
                        <Button type={'default'}>Отменить</Button>
                        <Button>Добавить мероприятие</Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};
