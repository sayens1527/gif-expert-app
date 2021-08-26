import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import { expect } from '@jest/globals';


describe('Test in GifExpertApp component', () => {
    
    test('should match with snapshot', () => {

        const wraper = shallow(<GifExpertApp></GifExpertApp>);

        expect(wraper).toMatchSnapshot();
        
    });

    test('should show a category list', () => {

        const categories= ['1','2','3'];
        
        const wraper = shallow(<GifExpertApp defaultCategories = {categories}></GifExpertApp>);

        const gridGifs = wraper.find('GifGrid').length;
        
        expect(gridGifs).toBe(categories.length);

    });
    

    test('should has  Add category component', () => {
        
        const wraper = shallow(<GifExpertApp></GifExpertApp>);

        const addCategoryElement = wraper.find('AddCategory');

        expect(addCategoryElement.exists()).toBe(true);

    });
    

});
