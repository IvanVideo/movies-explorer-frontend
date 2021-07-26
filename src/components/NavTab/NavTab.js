import './NavTab.css';
import React from 'react';

const NavTab = () => {
    return (
        <nav className='navTab'>
                <a className='navTab-link' href='#about'>О проекте</a>
                <a className='navTab-link' href='#tech'>Технологии</a>
                <a className='navTab-link' href='#me'>Студент</a>
        </nav>
    )
}

export default NavTab