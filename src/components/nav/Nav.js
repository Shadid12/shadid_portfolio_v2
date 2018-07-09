import React from 'react';

import './Nav.css';

export default class Nav extends React.Component {
    render() {
        return(
            <div className='main'>
                <div className='placeholder-nav'></div>
                <div className='main--nav'>
                    <div>
                        Logo
                    </div>
                </div>
                <div className='placeholder-nav'></div>
            </div>
        )
    }
} 