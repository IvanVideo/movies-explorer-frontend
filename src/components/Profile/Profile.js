import './Profile.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';

const Profile = ({logout, userInfo}) => {
    console.log(userInfo)
    return (
        <section className='profile'>
            <Header />
            <div className='profile-conteiner'>
                <h1 className='profile-title'>Привет, Иван!</h1>
                <div className='profile-box'>
                    <p className='profile-name left'>Имя</p>
                    <p className='profile-name'>{userInfo.name}</p>
                </div>
                <hr className='profile-line' />
                <div className='profile-box'>
                    <p className='profile-name left'>E-mail</p>
                    <p className='profile-name'>{userInfo.email}</p>
                </div>
                <button className='profile-button'>Редактировать</button>
                <button className='profile-button profile-link' onClick={logout} >Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile