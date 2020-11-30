import React from 'react'
import style from "./Header.module.css"
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'


const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <Logo />
                <Menu />
            </div>
        </header>
    )
}
export default Header;