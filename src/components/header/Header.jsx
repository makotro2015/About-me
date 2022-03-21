import React from 'react';
import avatar from '../../image/author.png';
import logo from '../../image/ilink.png';
import AuthorInfo from '../../configurations/authorInfo';
import s from './Header.module.scss';
import Button from '../button/Button';




function Header () {
    return (
        <header>
        <div className={s.authorInfo}>
        <img className={s.avatar} src={avatar} alt="Фотография"/>
        <p className={s.authorName}>{AuthorInfo.fullName}</p>
        </div> 
        <img className={s.logo} src={logo} alt="Логотип академии iLink"/>
        <Button value='Панель управления'/>
        </header>
    )
}

export default Header;