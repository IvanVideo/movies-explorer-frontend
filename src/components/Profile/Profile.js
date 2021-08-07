import './Profile.css';
import React from 'react';
import Header from '../Header/Header';
import ButtonSave from '../ButtonSave/ButtonSave';
import ProfileForm from '../ProfileForm/ProfileForm';

const Profile = (props) => {
    const [isActive, setIsActive] = React.useState(false);

    const changeStatus = () => {
        setIsActive(!isActive)
    }

    return (
        <section className='profile'>
            <Header />
            <div className='profile__conteiner'>
                <h1 className='profile__title'>Привет, Иван!</h1>
                <div className='profile__content'>
                    {isActive ? <ProfileForm userInfo={props.userInfo} userValues={props.updateUserInfo} /> :
                        <>
                            <div className='profile__box first'>
                                <p className='profile__name left'>Имя</p>
                                <hr className='profile__line' />
                                <p className='profile__name left'>E-mail</p>
                            </div>
                            <div className='profile__box second'>
                                <p className={isActive ? 'profile__name notVisible' : 'profile__name'}>{props.userInfo.name}</p>
                                <hr className='profile__line' />
                                <p className={isActive ? 'profile__name notVisible' : 'profile__name'}>{props.userInfo.email}</p>
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