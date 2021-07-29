import './MoviesCard.css';
import React from 'react';
import Like from '../Like/Like';

const MoviesCard = ({ card, handleLikeClick }) => {

  const [isLiked, setIsLiked] = React.useState(false);
  const elementHeart = document.querySelector('.moviesCard-like');
    
    // console.log(card, 'карточка')
    const hours = Math.trunc(card.duration/60)
    const minutes = card.duration%60

    const checkLikeStatus = () => {
        if(elementHeart.classList.contains('activelike')) {
            elementHeart.classList.remove('activelike')
            console.log(elementHeart, 'добавляю класс')
        } else {
            elementHeart.classList.add('activelike')
            console.log(elementHeart, 'удаляю класс')
        }
       
    }

    const handleLike = () => {
        handleLikeClick(card)
        checkLikeStatus(card)
    }

    return (
        <section className='moviesCard'>
            <div className='moviesCard-content'>
                <h2 className='moviesCard-title'>{card.nameRU}</h2>
                <p className='moviesCard-time'>{`${hours}ч ${minutes}м`}</p>
                <Like />
                {/* <button className='moviesCard-like' onClick={handleLike} /> */}
            </div>
            <img className='moviesCard-img' alt='picture' src={`https://api.nomoreparties.co${card.image.url}`} />
        </section>
    )
}

export default MoviesCard