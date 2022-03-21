import React from 'react';
import './Main.scss';
import SectionComments from './sectionComments/SectionComments';
import SectionWelcome from './sectionWelcome/SectionWelcome';

function Main () {
    return (
        <main>
            <SectionWelcome />
            <SectionComments />
        </main>
    )
}

export default Main;