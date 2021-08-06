import './AboutProject.css';
import React from 'react';

const AboutProject = () => {
    return (
        <section className='aboutProject' id='about'>
            <div className='conteiner'>
                <p className='title'>О проекте</p>
                <hr className='line' />
                <section className='aboutProject__content'>
                    <div className='aboutProject__column'>
                        <p className='aboutProject__heading'>Дипломный проект включал 5 этапов</p>
                        <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='aboutProject__column'>
                        <p className='aboutProject__heading second__heading'>На выполнение диплома ушло 5 недель</p>
                        <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </section>
                <div className='aboutProject__diagram'>
                    <div className='aboutProject__item item__1'>1 неделя</div>
                    <div className='aboutProject__item item__2'>4 недели</div>
                    <div className='aboutProject__item item__bottom'>Back-end</div>
                    <div className='aboutProject__item item__bottom'>Front-end</div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject