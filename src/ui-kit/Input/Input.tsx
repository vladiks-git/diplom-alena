import React, { FC } from 'react';

import './style.scss';

import { Input as InputAnt, InputProps } from 'antd';

export const Input: FC<InputProps> = (props) => {
    return <InputAnt className={'input'} {...props} />;
};
