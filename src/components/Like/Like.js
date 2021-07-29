import React, { useEffect } from 'react';


const Like = () => {
    const [isLiked, setIsLiked] = React.useState(false);

    const changeStatus = () => {
        setIsLiked(!isLiked);
    }

    return (
        <button className={isLiked ? 'moviesCard-like activelike' : 'moviesCard-like'} onClick={changeStatus} />
    )
}

export default Like