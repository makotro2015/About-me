import React from 'react';
import './Comment.scss';

function Comment (props) {
    return (
<div className='comment'>
    <div className='top'>
        <h3>{props.user.name}</h3>
        <p className='date'>{props.user.date}</p>       
    </div>
    <p>{props.user.comment}</p>
</div>
    )
}

export default Comment;