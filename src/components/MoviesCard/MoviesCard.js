import './MoviesCard.css';
import React from 'react';

const MoviesCard = ({ card, handleLikeClick }) => {
    // console.log(card, 'карточка')
    const hours = Math.trunc(card.duration/60)
    const minutes = card.duration%60


    const handleLike = () => {
        handleLikeClick(card)
    }

    return (
        <section className='moviesCard'>
            <div className='moviesCard-content'>
                <h2 className='moviesCard-title'>{card.nameRU}</h2>
                <p className='moviesCard-time'>{`${hours}ч ${minutes}м`}</p>
                <button className='moviesCard-like' onClick={handleLike} />
            </div>
            <img className='moviesCard-img' alt='picture' src={`https://api.nomoreparties.co${card.image.url}`} />
        </section>
    )
}

export default MoviesCard