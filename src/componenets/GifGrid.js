import React from 'react'
import GifGridItem from './GifGridItem';
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

export default GifGrid
