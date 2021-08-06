import './SearchForm.css';
import React from 'react';
import checkbox from '../../images/check.svg';
import checkbox2 from '../../images/black.svg';

const SearchForm = ({ enterValue }) => {

    const [inputValue, setInputValue] = React.useState('');
    const [checkboxState, setCheckboxState] = React.useState(false);

    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        enterValue(inputValue)
    };

    const clickCheckbox = () => {
        setCheckboxState(!checkboxState)
        console.log(checkboxState)

    }

    return (
        <section className='searchForm'>
            <div className='searchForm__conteiner'>
                <form className='searchForm__box' onSubmit={handleSubmit} >
                    <input className='searchForm__input' required placeholder="Фильм" onClick={handleChangeInputValue} />
                    <input className='searchForm__button' type='submit' value='Поиск' />
                    <div className='searchForm__active'>
                        <input type="checkbox" className='searchForm__checkbox' id="id1" onChange={clickCheckbox} />
                        <label htmlFor="id1"><img src={checkboxState ? checkbox : checkbox2} alt="radiobutton" className='searchForm-radio' /></label>
                        <p className='searchForm__shortfilms'>Короткометражки</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SearchForm