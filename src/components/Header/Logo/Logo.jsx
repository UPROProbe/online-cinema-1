import React from 'react';
import style from "./Logo.module.css"
import { NavLink } from 'react-router-dom';

const Logo = (props) => {
    return (
        <div className={style.logo}>
            {/* <a href="#"><img src="/image/icon.png" alt="Photo"><span>Online</span>Cinema</a> */}
            {/* <a href="index.html"><span>Online</span> Cinema</a> */}
            <NavLink to='/'><span>Online</span> Cinema</NavLink>
        </div>
    )
}
export default Logo;