import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { React, useEffect } from 'react';


const MoviesCardList = ({ enterValue, dataFilms, serchValue, handleLikeClick }) => {
    const cardsConteiner = document.querySelector('.moviesCardList-conteiner');
    let cardsArray = Array.from(dataFilms)
    let newCardsArray = cardsArray.slice(0, 6)
    console.log(newCardsArray, 'abkmvs')

    const handleButtonClick = () => {
        cardsConteiner.scrollIntoView({block: "center", behavior: "smooth"});
    }

    return (
        <section className='moviesCardList'>
            <Header />
            <div className='moviesCardList-position'>
                <SearchForm enterValue={enterValue} />
                <div className='moviesCardList-conteiner'>
                    {
                        newCardsArray.map(item => (
                            <MoviesCard
                                key={item.id}
                                card={item}
                                handleLikeClick={handleLikeClick}
                            />
                        ))
                    }
                </div>
                <button className='moviesCardList-button' onClick={handleButtonClick} >Ещё</button>
            </div>
            <Footer />
        </section>
    )
}

export default MoviesCardList