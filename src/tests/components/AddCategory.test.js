import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom'


describe('Test in AddCategory component', () => {

    const setCategories = jest.fn();
    let wraper = shallow(<AddCategory setCategories={ setCategories }></AddCategory>);

    beforeEach( () => { 
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCategories={ setCategories }></AddCategory>);
    });

    test('should match with snapshot', () => {
    
        expect(wraper).toMatchSnapshot();

    });

    test('should change the iput text change', () => {

        const input = wraper.find('input');

        input.simulate('change', {target:{value:'Hola mundo'}});

        //const inputValue = input.prop('value');

        //expect(inputValue).toBe('Hola mundo');
        
    });

    test('should not call the set category function', () => {
        

        const form = wraper.find('form');

        form.simulate('submit', { preventDefault(){} } );

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('should call the set category function', () => {
        
        const input = wraper.find('input');

        input.simulate('change', {target:{value:'Hola mundo'}});

        const form = wraper.find('form');

        form.simulate('submit', { preventDefault(){} } );

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        const inputAfterSubmit = wraper.find('input');
        const inputValueAfterSubmit = inputAfterSubmit.prop('value')

        expect(inputValueAfterSubmit).toBe('');

    });
    
    
    
})

