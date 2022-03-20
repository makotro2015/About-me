import React from 'react';
import './Main.scss';
import SectionComments from './SectionComments';
import SectionWelcome from './SectionWelcome';

function Main () {
    return (
        <main>
            <SectionWelcome />
            <SectionComments />
        </main>
    )
}

export default Main;