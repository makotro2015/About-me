import React from 'react';
import Comment from './Comment';
import './SectionComments.scss';
import Button from '../button/Button'
import {user1, user2} from '../../configurations/comments.js'

function SectionComments () {
    return (
        <section className='section-comments'>
            <div className='content'>
                <div className='top'>
                    <h2>Отзывы</h2>
                    <Button value='Добавить отзыв'/>
                </div>
                <div className='comments'>
                    <Comment user={{...user1}}/>
                    <Comment user={{...user2}}/>
                </div>
            </div>
            <div className='btns-toggle'>
                <button>Лево</button>
                <button>Право</button>
            </div>
        </section>
    )
}

export default SectionComments;