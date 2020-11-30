import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Menu.module.css"
import SignIn from './Modal/SignIn';
import SignUp from './Modal/SignUp';
const Menu = (props) => {
    return (
        <div className={style.menu}>
            <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            <NavLink to='/booking' activeClassName={style.active}>Booking</NavLink>
            <NavLink to='/admin_movies' activeClassName={style.active}>Manage Movies</NavLink>
            <NavLink to='/admin_users' activeClassName={style.active}>Manage Users</NavLink>
            <SignUp />
            <SignIn />
        </div>
    )
}
export default Menu;