import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../ui-kit/Button/Button';
import './style.scss';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../store';
import { logOut } from '../../slices/authSlice';

interface IHeaderProps {
    links: { path: string; title: string }[];
}

// Компонент хедера
const Header: FC<IHeaderProps> = ({ links }) => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        navigate('/auth');
        dispatch(logOut());
    };

    return (
        <header className={'container header'}>
            <div className="header__inner">
                {links.map((link) => (
                    <NavLink key={link.path + Math.random()} to={link.path}>
                        {link.title}
                    </NavLink>
                ))}
            </div>
            <Button onClick={handleLogout} type={'text'}>
                Выйти
            </Button>
        </header>
    );
};

export default Header;
