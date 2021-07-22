import './Promo.css';
import pic from '../../images/log.svg';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Promo = () => {
    return (
        <section className='promo'>
            <div className='promo-conteiner'>
                <div className='promo-header'>
                    <a href='#about'><img className='promo-logo' alt='logo' src={logo} /></a>
                    <div className='promo-start'>
                        <Link className='promo-singup' to='/signup'>Регистрация</Link>
                        <Link className='promo-link' to='/signin'>
                            <button className='promo-button'>Войти</button>
                        </Link>
                    </div>
                </div>
                <div className='promo-content'>
                    <h1 className='promo-title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <img className='promo-img' alt='logo' src={pic} />
                </div>
            </div>
        </section>
    )
}

export default Promo