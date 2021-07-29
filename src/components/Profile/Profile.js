import './Profile.css';
import React from 'react';
import Header from '../Header/Header';

const Profile = ({logout, userInfo}) => {
    // console.log(userInfo)
    const [isActive, setIsActive] = React.useState(false);

    const changeStatus = () => {
        setIsActive(!isActive)
    }

    return (
        <section className='profile'>
            <Header />
            <div className='profile-conteiner'>
                <h1 className='profile-title'>Привет, Иван!</h1>
                <div className='profile-box'>
                    <p className='profile-name left'>Имя</p>
                    <p className={isActive ? 'profile-name notVisible' : 'profile-name'}>{userInfo.name}</p>
                    <input className={isActive ? 'profile-input' : 'profile-input notVisible'} placeholder={userInfo.name} ></input>

                </div>
                <hr className='profile-line' />
                <div className='profile-box'>
                    <p className='profile-name left'>E-mail</p>
                    <p className={isActive ? 'profile-name notVisible' : 'profile-name'}>{userInfo.email}</p>
                    <input className={isActive ? 'profile-input' : 'profile-input notVisible'} placeholder={userInfo.email} ></input>
                </div>
                <button className={isActive ? 'profile-button notVisible' : 'profile-button'} onClick={changeStatus} >Редактировать</button>
                <button className={isActive ? 'profile-buttonSave' : 'profile-buttonSave notVisible'} onClick={changeStatus} >Сохранить</button>
                <button className={isActive ? 'profile-button profile-link notVisible' : 'profile-button profile-link'} onClick={logout} >Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile