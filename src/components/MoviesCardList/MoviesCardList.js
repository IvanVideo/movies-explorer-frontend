import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { React, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';


const MoviesCardList = (props) => {
    const cardsConteiner = document.querySelector('.moviesCardList-conteiner');

    let cardsArray = Array.from(props.dataFilms)
    let newCardsArray = cardsArray.slice(0, 6)

    let serchResult = newCardsArray.filter(item => item.nameRU.includes(`${props.serchValue}`))

    const handleButtonClick = () => {
        cardsConteiner.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    return (
        <section className='moviesCardList'>
            <Header />
            <div className='moviesCardList-position'>
                <SearchForm enterValue={props.enterValue} />
                <div className='moviesCardList-conteiner'>
                    {props.isLoading ? <Preloader isLoading={props.isLoading} /> : newCardsArray.map(item => (
                        <MoviesCard
                            key={item.id}
                            card={item}
                            handleLikeClick={props.handleLikeClick}
                        />
                    ))}
                </div>
                <button className='moviesCardList-button' onClick={handleButtonClick} >Ещё</button>
            </div>
            <Footer />
        </section>
    )
}

export default MoviesCardList