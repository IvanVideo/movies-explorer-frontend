import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { React, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';


const MoviesCardList = (props) => {
    const cardsConteiner = document.querySelector('.moviesCardList-conteiner');
    const handleButtonClick = () => {
        cardsConteiner.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    let cardsArray = Array.from(props.dataFilms)
    let newCardsArray = cardsArray.slice(0, 6)

    return (
        <section className='moviesCardList'>
            <Header />
            <div className='moviesCardList-position'>
                <SearchForm enterValue={props.enterValue} />
                <div className='moviesCardList-conteiner'>
                    <h1 className={props.dataFilms.length === 0 ? 'emptySearch' : 'emptySearch-notVisible'}>Ничего не найдено</h1>
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