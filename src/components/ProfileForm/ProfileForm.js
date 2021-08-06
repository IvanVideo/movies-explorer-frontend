import './ProfileForm.css';
import React, { useEffect } from 'react';
import ButtonSave from '../ButtonSave/ButtonSave';

const ProfileForm = (props) => {
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [inputStatus, setInputStatus] = React.useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);
        statusInputs()
    }

    const handleChangeMail = (e) => {
        setMail(e.target.value);
        statusInputs()
    }

    const statusInputs = () => {
        console.log(name.length, 'name')
        console.log(mail.length, 'mail')
        { (name.length && mail.length >= 2) ? setInputStatus(true) : setInputStatus(false) }
    }

    return (
        <div className='profile__content'>
            <div className='profile__box first'>
                <p className='profile__name left'>Имя</p>
                <hr className='profile__line' />
                <p className='profile__name left'>E-mail</p>
            </div>
            <form className='profileForm'>
                <input className='profileForm__input' placeholder={props.userInfo.name} onChange={handleChangeName} ></input>
                <hr className='form__line' />
                <input className='profileForm__input' placeholder={props.userInfo.email} onChange={handleChangeMail} ></input>
                <ButtonSave inputStatus={inputStatus} />
            </form>
        </div>
    )
}

export default ProfileForm