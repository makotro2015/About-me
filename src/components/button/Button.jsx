import React from 'react';
import './Button.scss';

function Button (props) {
return <button className="button" onClick={props.onClick}>{props.value}</button>
}

export default Button;