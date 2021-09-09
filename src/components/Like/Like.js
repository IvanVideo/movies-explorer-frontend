import React, { useEffect } from 'react';


const Like = (props) => {
    const changeStatus = () => {
        console.log(props.card.isLiked, '1111')
        if(props.card.isLiked === false) {
            props.card.isLiked = true
        } else {
            props.card.isLiked = false
        }
        console.log(props.card.isLiked)
        props.status(props.card)
    }

    return (
        <button className={props.card.isLiked ? 'moviesCard-like activelike' : 'moviesCard-like'} onClick={changeStatus} />
    )
}

export default Like