import './Header.css';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import Menu from '../Menu/Menu';

const Header = (props) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const changeStatus = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className='header'>
            <div className='conteiner'>
                <div className='header__content'>
                    <nav className='header__box'>
                        <Link to='/'><img className='logo' alt='logo' src={logo} /></Link>
                        <Link className='header__link films' to='/movies'>Фильмы</Link>
                        <Link className='header__link saved' to='/saved-movies'>Сохранённые фильмы</Link>
                    </nav>
                    <div className='header__burger' onClick={changeStatus} />
                    {isOpen ? null : <Menu setIsOpen={setIsOpen} isOpen={isOpen} />}
                    <Link className='header__profile' to='/profile'><img alt='profile' src={profile} /></Link>
                </div>
            </div>
        </header>
    )
}

export default Header