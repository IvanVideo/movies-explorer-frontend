import './SearchForm.css';
import React from 'react';
import checkbox from '../../images/check.svg';

const SearchForm = () => {
    return (
        <section className='searchForm'>
            <div className='searchForm-conteiner'>
                <form className='searchForm-box'>
                    <input className='searchForm-input' placeholder="Фильм" />
                    <input className='searchForm-button' type='submit' value='Поиск' />
                </form>
                <div className='searchForm-active'>
                    <input type="radio" className='searchForm-checkbox' id="id1" />
                    <label htmlFor="id1"><img src={checkbox} alt="radiobutton" className='searchForm-radio' /></label>
                    <p className='searchForm-shortfilms'>Короткометражки</p>
                </div>
            </div>
        </section>
    )
}

export default SearchForm