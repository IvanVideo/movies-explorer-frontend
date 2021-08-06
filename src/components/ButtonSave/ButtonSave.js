import './ButtonSave.css';
import React from 'react';

const ButtonSave = (props) => {

    return (
        <button className={props.inputStatus ? 'buttonSave__active' : 'buttonSave__disabled'} >Сохранить</button>
    )
}

export default ButtonSave