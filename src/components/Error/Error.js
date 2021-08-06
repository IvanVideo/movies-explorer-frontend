import './Error.css';
import { Link, BrowserRouter } from "react-router-dom";
import React from 'react';

const Error = () => {
    return (
        <div className='error'>
            <h1 className='error__title'>404</h1>
            <p className='error__subtitle'>Страница не найдена</p>
            <BrowserRouter>
                <Link className='error__link'>Назад</Link>
            </BrowserRouter>
        </div>
    )
}

export default Error;