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
            <div className='profile-conteiner'>
                <h1 className='profile-title'>Привет, Иван!</h1>
                <div className='profile-content'>
                    {isActive ? <ProfileForm userInfo={props.userInfo} /> :
                        <>
                            <div className='profile-box first'>
                                <p className='profile-name left'>Имя</p>
                                <hr className='profile-line' />
                                <p className='profile-name left'>E-mail</p>
                            </div>
                            <div className='profile-box second'>
                                <p className={isActive ? 'profile-name notVisible' : 'profile-name'}>{props.userInfo.name}</p>
                                <hr className='profile-line' />
                                <p className={isActive ? 'profile-name notVisible' : 'profile-name'}>{props.userInfo.email}</p>
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