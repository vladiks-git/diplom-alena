import React, { FC } from 'react';

import { DatePicker as DatePickerAnt, DatePickerProps } from 'antd';

import './style.scss';

export const DatePicker: FC<DatePickerProps> = (props) => {
    return (
        <DatePickerAnt
            {...props}
            className={'date-picker'}
            placeholder={'Выберите дату'}
        />
    );
};
