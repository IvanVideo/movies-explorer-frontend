import './Profile.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';

const Profile = () => {
    return (
        <section className='profile'>
            <Header />
            <div className='profile-conteiner'>
                <h1 className='profile-title'>Привет, Иван!</h1>
                <div className='profile-box'>
                    <p className='profile-name left'>Имя</p>
                    <p className='profile-name'>Виталий</p>
                </div>
                <hr className='profile-line' />
                <div className='profile-box'>
                    <p className='profile-name left'>E-mail</p>
                    <p className='profile-name'>pochta@yandex.ru</p>
                </div>
                <button className='profile-button'>Редактировать</button>
                <Link className='profile-link' to='/movies'>Выйти из аккаунта</Link>
            </div>
        </section>
    )
}

export default Profile