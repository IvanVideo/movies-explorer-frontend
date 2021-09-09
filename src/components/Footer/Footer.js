import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='conteiner'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <hr className='footer__line' />
                <div className='footer__bottom'>
                    <p className='footer__copi'>© 2020</p>
                    <nav className='footer__nav'>
                        <a className='footer__link' href='https://praktikum.yandex.ru/profile/web/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                        <a className='footer__link' href='https://github.com/IvanVideo' target='_blank' rel='noreferrer'>Github</a>
                        <a className='footer__link' href='https://www.facebook.com/iteapro/' target='_blank' rel='noreferrer'>Facebook</a>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Footer