import React from 'react';
import AuthorInfo from '../../configurations/authorInfo';
import avatar from '../../image/author.png';
import './main.scss';

function Main () {
    return (
        <main>
            <section className='welcome'>
            <h1>Добро пожаловать в академию!</h1>
            <div className='wrapper'>
            <div className='wrapper-img'>
            <img src={avatar} alt='Фотография автора'/>
            </div>
                <div className='author-info'>
                    <div className='name-year'>
                        <h2>{AuthorInfo.fullName}</h2>
                        <span>{AuthorInfo.birthday}</span>
                    </div>
                    <div className='town-gender-year'>
                        <span>Город: {AuthorInfo.town}</span>
                        <span>Пол: {AuthorInfo.gender}</span>
                        <span>Возрвст: {AuthorInfo.age}</span>
                    </div>
                    <p>О себе: {AuthorInfo.aboutSelf}</p>
                    <p>WTF: {AuthorInfo.ps}</p>
                    <span>Домашнее животное: {AuthorInfo.pet}</span>
                </div>
            </div>

            </section>
        </main>
    )
}

export default Main;