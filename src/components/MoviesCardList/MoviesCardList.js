import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';
import film from '../../images/pic.svg';

const MoviesCardList = () => {
    return (
        <section className='moviesCardList'>
            <Header />
            <div className='moviesCardList-position'>
                <SearchForm />
                <div className='moviesCardList-conteiner'>
                    <MoviesCard />
                    <MoviesCard />
                    <section className='moviesCard'>
                        <div className='moviesCard-content'>
                            <h2 className='moviesCard-title'>33 слова о дизайне</h2>
                            <p className='moviesCard-time'>1ч 42м</p>
                            <button className='moviesCard-like white'></button>
                        </div>
                        <img className='moviesCard-img' alt='picture' src={film} />
                    </section>
                    <section className='moviesCard'>
                        <div className='moviesCard-content'>
                            <h2 className='moviesCard-title'>33 слова о дизайне</h2>
                            <p className='moviesCard-time'>1ч 42м</p>
                            <button className='moviesCard-like'></button>
                        </div>
                        <img className='moviesCard-img' alt='picture' src={film} />
                    </section>
                    <MoviesCard />
                    <section className='moviesCard'>
                        <div className='moviesCard-content'>
                            <h2 className='moviesCard-title'>33 слова о дизайне</h2>
                            <p className='moviesCard-time'>1ч 42м</p>
                            <button className='moviesCard-like white'></button>
                        </div>
                        <img className='moviesCard-img' alt='picture' src={film} />
                    </section>
                    <section className='moviesCard'>
                        <div className='moviesCard-content'>
                            <h2 className='moviesCard-title'>33 слова о дизайне</h2>
                            <p className='moviesCard-time'>1ч 42м</p>
                            <button className='moviesCard-like white'></button>
                        </div>
                        <img className='moviesCard-img' alt='picture' src={film} />
                    </section>
                </div>
                <button className='moviesCardList-button'>Ещё</button>
            </div>
            <Footer />
        </section>
    )
}

export default MoviesCardList