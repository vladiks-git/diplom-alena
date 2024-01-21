import React, { FC } from 'react';

import { Select as SelectAnt, SelectProps } from 'antd';

import './style.scss';

export const Select: FC<SelectProps> = (props) => {
    return <SelectAnt {...props} className={'select'} />;
};
