import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    let [categories, setCategories] = useState(defaultCategories);

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
        