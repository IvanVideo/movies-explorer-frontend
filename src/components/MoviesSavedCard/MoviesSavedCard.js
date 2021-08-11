import './MoviesSavedCard.css';
import React, { useEffect } from "react";
import Like from '../Like/Like';

const MoviesSavedCard = (props) => {

    const [isLiked, setIsLiked] = React.useState(false);
    const [card, setCard] = React.useState({})

    const hours = Math.trunc(card.duration / 60)
    const minutes = card.duration % 60
    useEffect(() => {
        setCard(props.card)
    }, [])

    const removeCard = () => {
        props.removeFilm(props.card)
    }


    return (
        <section className='moviesCard'>
            <div className='moviesCard__content'>
                <h2 className='moviesCard__title'>{card.nameRU}</h2>
                <p className='moviesCard__time'>{`${hours}ч ${minutes}м`}</p>
                <button className={'moviesCard__notLike'} onClick={removeCard} />
            </div>
            <img className='moviesCard__img' alt='picture' src={card.image} />
        </section>
    )
}

export default MoviesSavedCard