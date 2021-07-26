import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';
import film from '../../images/pic.svg';

const SavedMovies = () => {
    return (
        <section className='savedMovies'>
            <Header />
            <div className='savedMoviesCardList-position'>
                <SearchForm />
                <div className='savedMoviesCardList-conteiner'>
                    <section className='moviesCard'>
                        <div className='moviesCard-content'>
                            <h2 className='moviesCard-title'>33 слова о дизайне</h2>
                            <p className='moviesCard-time'>1ч 42м</p>
                            <button className='moviesCard-notLike'></button>
                        </div>
                        <img className='moviesCard-img' alt='picture' src={film} />
                    </section>
                    <section className='moviesCard'>
                        <div className='moviesCard-content'>
                            <h2 className='moviesCard-title'>33 словnotLikeа о дизайне</h2>
                            <p className='moviesCard-time'>1ч 42м</p>
                            <button className='moviesCard-notLike'></button>
                        </div>
                        <img className='moviesCard-img' alt='picture' src={film} />
                    </section>
                    <section className='moviesCard'>
                        <div className='moviesCard-content'>
                            <h2 className='moviesCard-title'>33 слова о дизайне</h2>
                            <p className='moviesCard-time'>1ч 42м</p>
                            <button className='moviesCard-notLike'></button>
                        </div>
                        <img className='moviesCard-img' alt='picture' src={film} />
                    </section>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default SavedMovies