import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
    return (
        <section className='login'>
            <div className='login-conteiner'>
                <img className='login-svg' alt='logo' src={logo} />
                <h1 className='login-title'>Рады видеть!</h1>
                <form className='form'>
                    <label className='form-label'>E-mail</label>
                    <input className='form-input'></input>
                    <label className='form-label'>Пароль</label>
                    <input className='form-input'></input>
                    <span id="form-err" className="form-error">Что-то пошло не так...</span>
                </form>
                <button className='login-button'>Войти</button>
                <div className='login-footer'>
                    <p className='login-text'>Ещё не зарегистрированы?</p>
                    <Link className='login-link' to='/signup'>Регистрация</Link>
                </div>
            </div>
        </section>
    )
}

export default Login