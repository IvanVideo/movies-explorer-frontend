import './Portfolio.css';
import link from '../../images/tex.svg';
import React from 'react';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='conteiner'>
                <p className='portfolio-title'>Портфолио</p>
                <div className='portfolio-box'>
                    <a className='portfolio-link' href='https://github.com/IvanVideo/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт</a>
                    <img className='portfolio-img' alt='arrow' href='link' src={link} />
                </div>
                <div className='portfolio-box'>
                    <a className='portfolio-link' href='https://github.com/IvanVideo/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
                    <img className='portfolio-img' alt='arrow' href='link' src={link} />
                </div>
                <div className='portfolio-box'>
                    <a className='portfolio-link' href='https://github.com/IvanVideo/react-mesto-api-full' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
                    <img className='portfolio-img' alt='arrow' href='link' src={link} />
                </div>
            </div>
        </section>
    )
}

export default Portfolio