import './AboutProject.css';
import React from 'react';

const AboutProject = () => {
    return (
        <section className='aboutProject' id='about'>
            <div className='conteiner'>
                <p className='title'>О проекте</p>
                <hr className='line' />
                <section className='aboutProject-content'>
                    <div className='aboutProject-column'>
                        <p className='aboutProject-heading'>Дипломный проект включал 5 этапов</p>
                        <p className='aboutProject-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='aboutProject-column'>
                        <p className='aboutProject-heading second-heading'>На выполнение диплома ушло 5 недель</p>
                        <p className='aboutProject-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </section>
                <div className='aboutProject-diagram'>
                    <div className='aboutProject-item item-1'>1 неделя</div>
                    <div className='aboutProject-item item-2'>4 недели</div>
                    <div className='aboutProject-item item-bottom'>Back-end</div>
                    <div className='aboutProject-item item-bottom'>Front-end</div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject