import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import React, { useEffect } from "react";
import Preloader from '../Preloader/Preloader';


const MoviesCardList = (props) => {
    // const[cards, setCards] = React.useState({});
    const cardsConteiner = document.querySelector('.moviesCardList-conteiner');

    // useEffect(() => {
    //     setCards(props.dataFilms)
    //   }, [])

    let cardsArray = Array.from(props.dataFilms)
    let newCardsArray = cardsArray.slice(0, 6)

    const handleButtonClick = () => {
        // cardsConteiner.scrollIntoView({ block: "center", behavior: "smooth" });
        
    }
    
    return (
        <section className='moviesCardList'>
            <Header widthWindow={props.widthWindow} />
            <div className='moviesCardList__position'>
                <SearchForm enterValue={props.enterValue} />
                <div className='moviesCardList__conteiner'>
                    <h1 className={props.dataFilms.length === 0 ? 'emptySearch' : 'emptySearch__notVisible'}>Ничего не найдено</h1>
                    {props.isLoading ? <Preloader isLoading={props.isLoading} /> : newCardsArray.map(item => (
                        <MoviesCard
                            key={item.id}
                            card={item}
                            handleLikeClick={props.handleLikeClick}
                        />
                    ))}
                </div>
                <button className='moviesCardList__button' onClick={handleButtonClick} >Ещё</button>
            </div>
            <Footer />
        </section>
    )
}

export default MoviesCardList