import React, { FC, PropsWithChildren } from 'react';
import { Button as ButtonAnt, ButtonProps } from 'antd';

import './style.scss';

type IButtonProps = ButtonProps & PropsWithChildren;

const Button: FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <ButtonAnt {...rest} type={rest.type || 'primary'} className={'button'}>
            {children}
        </ButtonAnt>
    );
};

export default Button;
