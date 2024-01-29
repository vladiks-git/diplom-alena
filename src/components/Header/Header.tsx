import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../ui-kit/Button/Button';
import './style.scss';

interface IHeaderProps {
    links: { path: string; title: string }[];
}

const Header: FC<IHeaderProps> = ({ links }) => {
    return (
        <header className={'container header'}>
            <div className="header__inner">
                {links.map((link) => (
                    <NavLink key={link.path + Math.random()} to={link.path}>
                        {link.title}
                    </NavLink>
                ))}
            </div>
            <Button type={'text'}>Выйти</Button>
        </header>
    );
};

export default Header;
