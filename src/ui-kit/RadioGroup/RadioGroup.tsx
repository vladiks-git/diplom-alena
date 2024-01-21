import React, { FC } from 'react';

import { Radio, RadioProps } from 'antd';
import './style.scss';

type RadioGroupProps = RadioProps & {
    options: Array<{ value: string; title: string }>;
};

export const RadioGroup: FC<RadioGroupProps> = ({ options, ...rest }) => {
    return (
        <Radio.Group className={'radio'} {...rest}>
            {options.map((item) => (
                <Radio
                    className={'radio-item'}
                    key={item.value}
                    value={item.value}
                >
                    {item.title}
                </Radio>
            ))}
        </Radio.Group>
    );
};
