import React from 'react';
import avatar from '../../image/author.png';
import logo from '../../image/ilink.png';
import AuthorInfo from '../../configurations/authorInfo';
import './Header.scss';
import Button from '../button/Button';




function Header () {
    return (
        <header className="header">
        <div className="author-info">
        <img className="avatar" src={avatar} alt="Фотография"/>
        <p className="author-name">{AuthorInfo.fullName}</p>
        </div> 
        <img className="logo" src={logo} alt="Логотип академии iLink"/>
        <Button value='Панель управления'/>
        </header>
    )
}

export default Header;