import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';

const MoviesCardList = () => {
    return (
        <section className='moviesCardList'>
            <Header />
            <div className='moviesCardList-position'>
                <SearchForm />
                <div className='moviesCardList-conteiner'>
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </div>
                <button className='moviesCardList-button'>Ещё</button>
            </div>
            <Footer />
        </section>
    )
}

export default MoviesCardList