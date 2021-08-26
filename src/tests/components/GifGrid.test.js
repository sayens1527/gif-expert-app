import {shallow} from 'enzyme';
import GifGrid from "../../components/GifGrid";
import '@testing-library/jest-dom';
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test in GifGrid component', () => {

    const category = 'One punch';


    test('should match with snapshot', () => {

        useFetchGifs.mockReturnValue({data:[],isLoading:true});

        const wraper = shallow(<GifGrid category= { category }></GifGrid>);
        
        expect(wraper).toMatchSnapshot();
    });
    
    test('should show the images when use useFecthGifts', () => {

        const gifs =  [
            {
                id: '123',
                title:'titulo',
                url:'https://www.algo.com/algo.png'
            },
            {
                id: '1234',
                title:'titulo',
                url:'https://www.algo.com/algo.png'
            },
            {
                id: '12345',
                title:'titulo',
                url:'https://www.algo.com/algo.png'
            }
        ]

        useFetchGifs.mockReturnValue({data:gifs,isLoading:false});

        const wraper = shallow(<GifGrid category= { category }></GifGrid>);

        const loading = wraper.find('p');
        const gifGridItems = wraper.find('GifGridItem').length;

        expect(gifGridItems).toBe(gifs.length);
        expect(loading.exists()).toBe(false);

    });
    
});
