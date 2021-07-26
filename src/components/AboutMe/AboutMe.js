import './AboutMe.css';
import foto from '../../images/foto.jpeg'
import React from 'react';

const AboutMe = () => {
    return (
        <section className='aboutMe' id='me'>
            <div className='conteiner'>
                <p className='title'>Студент</p>
                <hr className='line' />
                <section className='aboutMe-content'>
                    <div className='aboutMe-text'>
                        <h2 className='aboutMe-name'>Иван</h2>
                        <p className='aboutMe-job'>Фронтенд-разработчик, 29 лет</p>
                        <p className='aboutMe-text'>Я родился и живу в Москве. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. Люблю путешествовать. Обожаю экстримальный вид отдыха. С 2015 года работал в театре Табакова. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами.</p>
                        <div className='aboutMe-links'>
                            <a className='aboutMe-link' href='https://www.facebook.com/iteapro/' target='_blank' rel='noreferrer'>Facebook</a>
                            <a className='aboutMe-link' href='https://github.com/IvanVideo' target='_blank' rel='noreferrer'>Github</a>
                        </div>
                    </div>
                    <img className='aboutMe-img' src={foto} />
                </section>
            </div>
        </section>
    )
}

export default AboutMe