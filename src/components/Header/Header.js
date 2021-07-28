import './Header.css';
import logo from '../../images/logo.svg';
// import close from '../../images/close.svg';
import profile from '../../images/profile.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className='conteiner'>
                <div className='header-content'>
                    <div className='header-box'>
                        <img className='logo' alt='logo' src={logo} />
                        <Link className='header-link films' to='/movies'>Фильмы</Link>
                        <Link className='header-link saved' to='/saved-movies'>Сохранённые фильмы</Link>
                    </div>
                    <Link className='header-profile' to='/profile'><img alt='profile' src={profile} /></Link>
                    {/* <div className='header-burger'>
                        <span className='header-burgerMenu'></span>
                    </div> */}
                    {/* <p className='header-burgerText text1'>Главная</p>
                    <p className='header-burgerText text2'>Фильмы</p>
                    <p className='header-burgerText text3'>Сохранённые фильмы</p>
                    <img className='header-close' src={close} />
                    <Link className='header-profileBurger' to='/profile'><img alt='profile' src={profile} /></Link> */}
                </div>
            </div>
        </header>
    )
}

export default Header