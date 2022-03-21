import React from 'react';
import AuthorInfo from '../../configurations/authorInfo';
import avatar from '../../image/author.png';
import s from './SectionWelcome.module.scss';

function SectionWelcome () {
    return (
            <section className={s.section}>
            <h1>Добро пожаловать в академию!</h1>
            <div className={s.wrapper}>
                <div className={s.wrapperImg}>
                    <img src={avatar} alt='Фотография автора'/>
                </div>
                <div className={s.authorInfo}>
                    <div className={s.nameYear}>
                        <h3>{AuthorInfo.fullName}</h3>
                        <span>{AuthorInfo.birthday}</span>
                    </div>
                    <div className={s.townGenderYear}>
                        <span><b>Город:</b> {AuthorInfo.town}</span>
                        <span><b>Пол:</b> {AuthorInfo.gender}</span>
                        <span><b>Возраст:</b> {AuthorInfo.age}</span>
                    </div>
                    <p className={s.aboutSelf}><b>О себе:</b> {AuthorInfo.aboutSelf}</p>
                    <p className={s.ps}><i>WTF: {AuthorInfo.ps}</i></p>
                    <p className={s.pet}><b>Домашнее животное:</b> {AuthorInfo.pet}</p>
                </div>
            </div>
            </section>
    )
}

export default SectionWelcome;