import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='conteiner'>
                <p className='footer-title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <hr className='footer-line' />
                <div className='footer-bottom'>
                    <p className='footer-copi'>© 2020</p>
                    <nav className='footer-nav'>
                        <a className='footer-link' href='https://praktikum.yandex.ru/profile/web/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                        <a className='footer-link' href='https://github.com/IvanVideo' target='_blank' rel='noreferrer'>Github</a>
                        <a className='footer-link' href='https://www.facebook.com/iteapro/' target='_blank' rel='noreferrer'>Facebook</a>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Footer