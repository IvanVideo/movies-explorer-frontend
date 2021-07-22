import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';

const SavedMovies = () => {
    return (
        <section className='savedMovies'>
            <Header />
            <div className='savedMoviesCardList-position'>
                <SearchForm />
                <div className='savedMoviesCardList-conteiner'>
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default SavedMovies