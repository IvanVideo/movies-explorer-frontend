import './Techs.css';
import React from 'react';

const Techs = () => {
    return (
        <section className='techs' id='tech'>
            <div className='conteiner'>
                <p className='title'>Технологии</p>
                <hr className='line' />
                <div className='conteiner__techs'>
                    <h2 className='techs__title'>7 технологий</h2>
                    <p className='techs__about'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <section className='techs__stack'>
                        <div className='techs__item'>HTML</div>
                        <div className='techs__item'>CSS</div>
                        <div className='techs__item'>JS</div>
                        <div className='techs__item'>React</div>
                        <div className='techs__item'>Git</div>
                        <div className='techs__item'>Express.js</div>
                        <div className='techs__item'>mongoDB</div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Techs