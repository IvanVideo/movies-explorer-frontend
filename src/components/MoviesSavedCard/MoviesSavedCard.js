import './MoviesSavedCard.css';
import React, { useEffect } from "react";
import Like from '../Like/Like';

const MoviesSavedCard = (props) => {
    const hours = Math.trunc(props.card.duration / 60)
    const minutes = props.card.duration % 60


    const removeCard = () => {
        props.removeFilm(props.card)
    }


    return (
        <section className='moviesCard'>
            <div className='moviesCard__content'>
                <h2 className='moviesCard__title'>{props.card.nameRU}</h2>
                <p className='moviesCard__time'>{`${hours}ч ${minutes}м`}</p>
                <button className={'moviesCard__notLike'} onClick={removeCard} />
            </div>
            <img className='moviesCard__img' alt='picture' src={props.card.image} />
        </section>
    )
}

export default MoviesSavedCard