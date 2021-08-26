import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';
import {renderHook} from '@testing-library/react-hooks';

describe('test in useFetchGifs hook', () => {

    test('should return the initial status', async () => {

        
        const { result , waitForNextUpdate} = renderHook( () => useFetchGifs('One push'));

        const { data, isLoading } = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(isLoading).toBe(true);

    });
    
    test('should return a images array and loading in false', async () => {

        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('One push'));

        await waitForNextUpdate();

        const { data, isLoading } = result.current;
        
        expect(data).not.toEqual([]);
        expect(isLoading).toBe(false);

    });
    
});
