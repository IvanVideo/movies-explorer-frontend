import './MoviesCard.css';
import React, { useEffect } from "react";
import Like from '../Like/Like';

const MoviesCard = (props) => {

    const [isLiked, setIsLiked] = React.useState(false);
    const [card, setCard] = React.useState(props.card)
    // const elementHeart = document.querySelector('.moviesCard-like');


    const hours = Math.trunc(card.duration / 60)
    const minutes = card.duration % 60
    useEffect(() => {
        setCard({ ...card, isLiked })
    }, [])

    const changeStatus = () => {
        setIsLiked(!isLiked)
    }

    // const handleLike = () => {
    //     changeLike()
    //     console.log(isLiked)
    //     setIsLiked(!isLiked)
    //     console.log(isLiked)
    //     // console.log(card, 'карточка')
    //     // console.log(statusLike)
    //     statusLike = {...card, statusLike}
    //     // console.log(statusLike, 'карточка2')
    //     // console.log(newData, 'карточка2')

    // }


    return (
        <section className='moviesCard'>
            <div className='moviesCard__content'>
                <h2 className='moviesCard__title'>{card.nameRU}</h2>
                <p className='moviesCard__time'>{`${hours}ч ${minutes}м`}</p>
                {/* <Like card={card} status={status} /> */}
                <button className={isLiked ? 'moviesCard__like activelike' : 'moviesCard__like'} onClick={changeStatus} />
            </div>
            <img className='moviesCard__img' alt='picture' src={`https://api.nomoreparties.co${card.image.url}`} />
        </section>
    )
}

export default MoviesCard