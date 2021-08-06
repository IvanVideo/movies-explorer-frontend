import './Menu.css';
import React, { useEffect } from "react";
import close from '../../images/close.svg';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';

const Menu = (props) => {
    const currentURL = window.location.href
    console.log(currentURL)
    const handleClickCloseBtn = () => {
        props.setIsOpen(!props.isOpen)
    }
    return (
        <section className='menu'>
            <div className='menu__blur'>
                <div className='menu__content'>
                    <div className='menu__top'>
                        <button className='menu-btn' onClick={handleClickCloseBtn} />
                    </div>
                    <div className='menu__middle'>
                        <Link className='menu__link' to='/'>Главная</Link>
                        <Link className={currentURL === 'http://localhost:3000/movies' ? 'menu__link active' : 'menu__link'} to='/movies'>Фильмы</Link>
                        <Link className={currentURL === 'http://localhost:3000/saved-movies' ? 'menu__link active' : 'menu__link'} to='/saved-movies' >Сохранённые фильмы</Link>
                    </div>
                    <Link className='menu__link menu__link_profile' to='/profile'><img alt='profile' src={profile} /></Link>
                </div>
            </div>
        </section>
    )
}

export default Menu