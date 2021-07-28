import './SearchForm.css';
import React from 'react';
import checkbox from '../../images/check.svg';

const SearchForm = ({enterValue}) => {

    const [inputValue, setInputValue] = React.useState('');

    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        enterValue(inputValue)
    };

    return (
        <section className='searchForm'>
            <div className='searchForm-conteiner'>
                <form className='searchForm-box' onSubmit={handleSubmit} >
                    <input className='searchForm-input' required placeholder="Фильм" onChange={handleChangeInputValue} />
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