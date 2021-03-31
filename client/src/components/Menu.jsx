import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/style.css';

function Menu (props) {
    return (
            <div className='center__menu'>
                <h3>Меню</h3>
                <div className='center__change'>
                <NavLink to="/profile">Профиль</NavLink>
                <NavLink to="/messages">Сообщения</NavLink>
                <NavLink to="/main">Искать</NavLink>
                <NavLink to="/settings">Настройки</NavLink>
                <NavLink to="/registration">Регистрация</NavLink>
                <NavLink to="/login">Вход</NavLink>
                </div>
            </div>
    )
}

export default Menu;