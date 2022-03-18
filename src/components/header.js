import React from 'react';
import avatar from '../image/author.png';
import logo from '../image/ilink.png'

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3.2rem 8rem'
    },
    authorInfo: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    },
    avatar: {
        width: '5.2rem',
        height: '5.2rem'
    },
    authorName: {
        fontSize: '1.8rem'
    },
    logo: {
        width: '8.5rem',
        height: '5.2rem'
    },
    button: {
        width: '22.7rem',
        height: '5.2rem'
    }
};

function Header () {
    return (
        <header style={styles.header}>
        <div style={styles.authorInfo}>
        <img style={styles.avatar} src={avatar} alt="Фотография"/>
        <p style={styles.authorName}>Алена Комарова</p>
        </div> 
        <img style={styles.logo} src={logo} alt="Логотип академии iLink"/>
        <button style={styles.button}>Панель управления</button>
        </header>
    )
}

export default Header;