import React, { FC } from 'react';

import { Table as TableAnt, TableProps } from 'antd';

import './style.scss';

const Table: FC<TableProps> = (props) => {
    return (
        <TableAnt
            {...props}
            className={'table'}
            bordered={true}
            rowKey={'id'}
        />
    );
};

export default Table;
