import './Techs.css';
import React from 'react';

const Techs = () => {
    return (
        <section className='techs' id='tech'>
            <div className='conteiner'>
                <p className='title'>Технологии</p>
                <hr className='line' />
                <div className='conteiner-techs'>
                    <h2 className='techs-title'>7 технологий</h2>
                    <p className='techs-about'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <section className='techs-stack'>
                        <div className='techs-item'>HTML</div>
                        <div className='techs-item'>CSS</div>
                        <div className='techs-item'>JS</div>
                        <div className='techs-item'>React</div>
                        <div className='techs-item'>Git</div>
                        <div className='techs-item'>Express.js</div>
                        <div className='techs-item'>mongoDB</div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Techs