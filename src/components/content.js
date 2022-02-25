import React from 'react';
import Skills from './skills';
import WorkEduTimeline from './timeline1';
import '../styles/content.styl';

const Content = () => {
    return (
        <div className='content'>
            <div className='section'><Skills /></div>
            <div className='section'><WorkEduTimeline /></div>
            
        </div>
    )
}

export default Content;