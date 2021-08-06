import './Profile.css';
import React from 'react';
import Header from '../Header/Header';
import ButtonSave from '../ButtonSave/ButtonSave';
import ProfileForm from '../ProfileForm/ProfileForm';

const Profile = (props) => {
    // console.log(props.userInfo)
    const [isActive, setIsActive] = React.useState(false);
    // const [inputStatus, setInputStatus] = React.useState(false);

    const changeStatus = () => {
        setIsActive(!isActive)
    }

    const statusInputs = (data) => {
        console.log(data)
    }

    return (
        <section className='profile'>
            <Header />
            <div className='profile__conteiner'>
                <h1 className='profile__title'>Привет, Иван!</h1>
                <div className='profile__content'>
                    {isActive ? <ProfileForm userInfo={props.userInfo} /> :
                        <>
                            <div className='profile__box first'>
                                <p className='profile__name left'>Имя</p>
                                <hr className='profile__line' />
                                <p className='profile__name left'>E-mail</p>
                            </div>
                            <div className='profile__box second'>
                                <p className={isActive ? 'profile__name notVisible' : 'profile__name'}>{props.userInfo.name}</p>
                                <hr className='profile-line' />
                                <p className={isActive ? 'profile__name notVisible' : 'profile__name'}>{props.userInfo.email}</p>
                            </div>
                        </>
                    }
                </div>
                <button className={isActive ? 'profile-button notVisible' : 'profile-button'} onClick={changeStatus} >Редактировать</button>
                <button className={isActive ? 'profile-button profile-link notVisible' : 'profile-button profile-link'} onClick={props.logout} >Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile