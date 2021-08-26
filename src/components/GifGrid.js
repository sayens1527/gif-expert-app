import React from 'react'
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ( { category } ) => {

    const {data:images, isLoading} =  useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>
            {isLoading && <p>Loading</p> }
            <div className='grid'>
                {   
                    images.map( img => (
                        <GifGridItem  
                            key={img.id}
                            {...img}/>
                        
                    ))   
                }
            </div>
        </>
    )
}

GifGrid.propTypes =  {
    category:PropTypes.string.isRequired
}

export default GifGrid
