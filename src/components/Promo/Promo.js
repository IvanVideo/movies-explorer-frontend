import './Promo.css';
import pic from '../../images/log.svg';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Promo = (props) => {
    return (
        <section className='promo'>
            <div className='promo__conteiner'>
                <div className='promo__header'>
                    <a href='#about'><img className='promo__logo' alt='logo' src={logo} /></a>
                    {props.loggedIn ? (<div className='promo__start'>
                        <Link className='header__link films' to='/movies'>Фильмы</Link>
                        <Link className='header__link saved' to='/saved-movies'>Сохранённые фильмы</Link>
                    </div>) : (<div className='promo__start'>
                        <Link className='promo__singup' to='/signup'>Регистрация</Link>
                        <Link className='promo__link' to='/signin'>
                            <button className='promo__button'>Войти</button>
                        </Link>
                    </div>)
                    }
                </div>
                <div className='promo__content'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <img className='promo__img' alt='logo' src={pic} />
                </div>
            </div>
        </section>
    )
}

export default Promo