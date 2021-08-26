import {shallow} from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem'


describe('Test in GifGridItem component', () => {

    
    /*beforeEach( () => {
        wrapper = shallow(<CounterApp/>);
    });*/

    const url = 'url';
    const title = 'title';
    const wraper = shallow(<GifGridItem title={ title} url={ url }></GifGridItem>);
    
    test('should match with the snapshot', () => {
        expect(wraper).toMatchSnapshot();
    });

    test('should show the title in p element', () => {

        const titleInComponent = wraper.find('p').text().trim();
        expect(titleInComponent).toBe(title);

    });
    
    test('should show the image whit its attributes', () => {

        const img = wraper.find('img');
        const imgSrc =  img.prop('src');
        const imgAlt = img.prop('alt');

        expect (imgSrc).toBe(url);
        expect (imgAlt).toBe(title);
        
    });

    test('should has the class grid-item-item', () => {

        const div = wraper.find('div');

        const divClass = div.prop('className');

        expect(divClass.includes('grid-item-item') ).toBe(true);
        
    });
    
    
    
})
