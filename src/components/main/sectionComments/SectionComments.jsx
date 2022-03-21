import React from 'react';
import Comment from './comment/Comment';
import Carousel from './carousel/Carousel';
import s from './SectionComments.module.scss';
import Button from '../../button/Button';
import commentsData from '../../../configurations/comments.js';

function SectionComments () {
    let commentsElements = commentsData.map(c =>  <Comment user={{...c}}/>)
    return (
        <section className={s.section}>
            <div className={s.content}>
                <div className={s.top}>
                    <h2>Отзывы</h2>
                    <Button value='Добавить отзыв'/>
                </div>
                <Carousel>
                {commentsElements}
                </Carousel>              
            </div>
        </section>
    )
}

export default SectionComments;