import React from 'react';
import './Footer.scss';
import vk from '../../image/vk .png';
import frame from '../../image/frame.png';
import telegram from '../../image/telegram.png';

function Footer () {
    return (
<footer>
    <div className='wrapper'>
    <p className='rights'>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
    <div className='social'>
        <img src={vk} alt='Вконтакте' />
        <img src={frame} alt='Frame' />
        <img src={telegram} alt='Телеграмм' />
    </div>
    </div>
    
</footer>
    )
}

export default Footer;