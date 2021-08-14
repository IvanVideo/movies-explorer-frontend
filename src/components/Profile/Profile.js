import './Profile.css';
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = (props) => {
    const [isActive, setIsActive] = React.useState(false);
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setname] = React.useState('');

    useEffect(() => {
        setname(currentUser.name)
    })

    const changeStatus = () => {
        setIsActive(!isActive)
    }

    const check = (data) => {
        console.log(data, '0101')
    }

    return (
        <section className='profile'>
            <Header />
            <div className='profile__conteiner'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <div className='profile__content'>
                    {isActive ? <ProfileForm userInfo={props.userInfo} userValues={props.updateUserInfo} isLoading={props.isLoading} success={props.success} check={check} /> :
                        <>
                            <div className='profile__box first'>
                                <p className='profile__name left'>Имя</p>
                                <hr className='profile__line' />
                                <p className='profile__name left'>E-mail</p>
                            </div>
                            <div className='profile__box second'>
                                <p className={isActive ? 'profile__name notVisible' : 'profile__name'}>{name}</p>
                                <hr className='profile__line' />
                                <p className={isActive ? 'profile__name notVisible' : 'profile__name'}>{currentUser.email}</p>
                            </div>
                        </>
                    }
                </div>
                <button className={isActive ? 'profile__button notVisible' : 'profile__button'} onClick={changeStatus} >Редактировать</button>
                <button className={isActive ? 'profile__button profile__link notVisible' : 'profile__button profile__link'} onClick={props.logout} >Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile