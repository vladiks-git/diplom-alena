import React, { FC, PropsWithChildren } from 'react';

import { Modal as ModalAnt, ModalProps } from 'antd';

import './style.scss';

type IModalProps = ModalProps & PropsWithChildren;

export const Modal: FC<IModalProps> = ({ children, ...rest }) => {
    return (
        <ModalAnt {...rest} className={'modal'} footer={null}>
            {children}
        </ModalAnt>
    );
};
