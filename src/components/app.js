import React from 'react';
import Home from './home';
import Content from './content';
import Footer from './footer';

const App = () => {
    return (
        <div className='container'>
            <Home />
            <Content />
            <Footer />
        </div>
    )
}

export default App;