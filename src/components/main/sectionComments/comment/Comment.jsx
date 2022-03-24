import React from 'react';
import s from './Comment.module.scss';

function Comment (props) {
    const keys = Object.keys(props.user.url);
    return (
<div className={s.comment}>
    <div className={s.top}>
        <div className={s.userInfo}>
            <img className={s.ava} src={props.user.url[keys[0]]} alt='Фотография пользователя'/>
            <h3>{props.user.name}</h3>
        </div>  
        <p className={s.date}>{props.user.date}</p>       
    </div>
    <p className={s.commentText}>{props.user.comment}</p>
</div>
    )
}

export default Comment;