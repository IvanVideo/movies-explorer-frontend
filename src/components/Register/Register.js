import './Register.css';
import logo from '../../images/logo.svg';
import { Link, BrowserRouter } from 'react-router-dom';
import React from 'react';

const Register = () => {
    return (
        <section className='register'>
            <div className='register-conteiner'>
                <img className='register-svg' alt='logo' src={logo} />
                <h1 className='register-title'>Добро пожаловать!</h1>
                <form className='form'>
                    <label className='form-label'>Имя</label>
                    <input className='form-input'></input>
                    <label className='form-label'>E-mail</label>
                    <input className='form-input'></input>
                    <label className='form-label'>Пароль</label>
                    <input className='form-input'></input>
                    <span id="form-err" className="form-error">Что-то пошло не так...</span>
                </form>
                <button className='register-button'>Зарегистрироваться</button>
                <div className='register-footer'>
                    <p className='register-text'>Уже зарегистрированы?</p>
                    <BrowserRouter>
                        <Link className='register-link' to='/signin'>Войти</Link>
                    </BrowserRouter>
                </div>
            </div>
        </section>
    )
}

export default Register