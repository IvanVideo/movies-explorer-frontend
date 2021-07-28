import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLoginInfo({ email, password });
    }

    return (
        <section className='login'>
            <div className='login-conteiner'>
                <img className='login-svg' alt='logo' src={logo} />
                <h1 className='login-title'>Рады видеть!</h1>
                <form className='form' onSubmit={handleSubmit} >
                    <label className='form-label'>111@111.ru</label>
                    <input className='form-input' onChange={handleChangeEmail} />
                    <label className='form-label'>Пароль</label>
                    <input className='form-input' onChange={handleChangePassword} />
                    <span id="form-err" className="form-error">Что-то пошло не так...</span>
                    <button className='login-button'>Войти</button>
                </form>
                <div className='login-footer'>
                    <p className='login-text'>Ещё не зарегистрированы?</p>
                    <Link className='login-link' to='/signup'>Регистрация</Link>
                </div>
            </div>
        </section>
    )
}

export default Login