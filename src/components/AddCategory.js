import React , {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories } ) => {

    let [newCategory, setNewCategory] = useState('') ;

    const handleChange = (e) => {
        setNewCategory(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(newCategory.length > 2){
            setCategories(categories => [newCategory, ...categories]);
            setNewCategory('')
        }
        
    }

    return (
        <form onSubmit = { onSubmit } >
            <h2>Add category</h2>
            <input 
                type='text' 
                value={newCategory}
                onChange = { handleChange }
            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
