import React from 'react';
import './Button.scss';

function Button (props) {
return <button className="button" type={props.type} onClick={props.onClick} disabled={props.disabled}>{props.img}{props.value}</button>
}

export default Button;