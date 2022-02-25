import React from 'react';
import '../styles/home.styl';

const Home = () => {

    return (
        <div className='home'>
            <div className='intro'>
                <div className='name text-jenthill'>
                 {`👋 I am Neeva Ramoliya`}
                </div>
                <div className='sub-intro text-jenthill'>I design and code beautifully simple things and I love what I do</div>
                <div className='desc text-mosk'>
                    {`I'm a`} <b>Senior Fullstack Developer</b> {`based in India. I am specilized in building web application and have developed and scaled software used by millions of users.`}
                </div>
                {/* <div className='desc text-mosk'>
                    {`Here are a few technologies I’ve been working with recently:`}
                </div> */}
                {/* <div className='desc text-mosk'>
                    <ul className='lang-list'>
                        <li>Python</li>
                        <li>Django</li>
                        <li>React Redux</li>
                        <li></li>
                    </ul>
                    <ul className='lang-list'>
                        <li>Next Js</li>
                        <li>Node Js</li>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                    </ul>
                    <ul className='lang-list'>
                        <li>AWS</li>
                        <li>SQL</li>
                        <li>Machine Learning</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Home;