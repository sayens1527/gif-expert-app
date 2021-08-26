import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({title, url}) => {

    return (
        <div className='grid-item-item'>
            <p> { title } </p>
            <img src={url} alt= {title}></img>
        </div>
    )
}

GifGridItem.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
}

export default GifGridItem;
