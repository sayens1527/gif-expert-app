import React, { useState } from 'react'
import AddCategory from './componenets/AddCategory';
import GifGrid from './componenets/GifGrid';

const GifExpertApp = props => {

    let [categories, setCategories] = useState(['One Punch']);

    /*const hadleAdd = () => {
        setCategories([...categories,'Nueva categoria']);
    };*/

    return (
        <div>
            <h2>Gif expert App</h2>

            <AddCategory setCategories = { setCategories }></AddCategory>

            <hr/>

            <ol>
                { categories.map( cat => (
                    <GifGrid
                        key={cat}
                        category={cat}
                    />
                ))}
            </ol>
        </div>
    )
}

export default GifExpertApp
        