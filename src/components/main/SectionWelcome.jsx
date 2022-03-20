import React from 'react';
import AuthorInfo from '../../configurations/authorInfo';
import avatar from '../../image/author.png';
import './SectionWelcome.scss';

function SectionWelcome () {
    return (
            <section className='welcome'>
            <h1>Добро пожаловать в академию!</h1>
            <div className='wrapper'>
                <div className='wrapper-img'>
                    <img src={avatar} alt='Фотография автора'/>
                </div>
                <div className='author-info'>
                    <div className='name-year'>
                        <h3>{AuthorInfo.fullName}</h3>
                        <span>{AuthorInfo.birthday}</span>
                    </div>
                    <div className='town-gender-year'>
                        <span><b>Город:</b> {AuthorInfo.town}</span>
                        <span><b>Пол:</b> {AuthorInfo.gender}</span>
                        <span><b>Возраст:</b> {AuthorInfo.age}</span>
                    </div>
                    <p className='about-self'><b>О себе:</b> {AuthorInfo.aboutSelf}</p>
                    <p className='ps'><i>WTF: {AuthorInfo.ps}</i></p>
                    <p className='pet'><b>Домашнее животное:</b> {AuthorInfo.pet}</p>
                </div>
            </div>
            </section>
    )
}

export default SectionWelcome;