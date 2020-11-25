import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Menu.module.css"
const Menu = (props) => {
    return (
        <div className={style.menu}>
            <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            <NavLink to='/booking' activeClassName={style.active}>Booking</NavLink>
            <NavLink to='/admin_movies' activeClassName={style.active}>Manage Movies</NavLink>
            <NavLink to='/admin_users' activeClassName={style.active}>Manage Users</NavLink>
            <button type="button" className="btn up" data-toggle="modal" data-target="#signUp">Sign
                    Up</button>
            <button type="button" className="btn in" data-toggle="modal" data-target="#signIn">Sing
                    In</button>
        </div>

    )
}
export default Menu;