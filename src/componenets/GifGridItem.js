import React from 'react'

const GifGridItem = ({id, title, url}) => {

    return (
        <div className='grid-item-item'>
            <p> { title } </p>
            <img src={url} alt= {title}></img>
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
