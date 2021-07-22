import './MoviesCard.css';
import film from '../../images/pic.svg';
import React from 'react';

const MoviesCard = () => {
    return (
        <section className='moviesCard'>
            <div className='moviesCard-content'>
                <h2 className='moviesCard-title'>33 слова о дизайне</h2>
                <p className='moviesCard-time'>1ч 42м</p>
                <button className='moviesCard-like'></button>
            </div>
            <img className='moviesCard-img' alt='picture' src={film} />
        </section>
    )
}

export default MoviesCard