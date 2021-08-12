import "./MoviesCard.css";
import React, { useEffect } from "react";

const MoviesCard = (props) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const hours = Math.trunc(props.card.duration / 60);
  const minutes = props.card.duration % 60;
  // console.log(props.savedUserFilmsArr, "в карточке");

  const changeStatus = () => {
    props.savedFilm(props.card);

    // console.log(props.card.id, 'id карточки')
    // for (let i = 0; i < props.savedUserFilmsArr.length; i++) {
    //   if (props.savedUserFilmsArr[i]._id == props.card.id) {
    //     console.log('0')
    //     setIsLiked(true);
    //   } else {
    //     console.log('1')
    //     setIsLiked(false);
    //   }
    // }
  };

  return (
    <section className="moviesCard">
      <div className="moviesCard__content">
        <h2 className="moviesCard__title">{props.card.nameRU}</h2>
        <p className="moviesCard__time">{`${hours}ч ${minutes}м`}</p>
        <button
          className={
            props.isLiked ? "moviesCard__like activelike" : "moviesCard__like"
          }
          onClick={changeStatus}
        />
      </div>
      <img
        className="moviesCard__img"
        alt="picture"
        src={`https://api.nomoreparties.co/.${props.card.image.url}`}
      />
    </section>
  );
};

export default MoviesCard;
