import getGifs from "../../helpers/Gifts"


describe('test in get gifts file', () => {
    
    test('should get 10 items', async () => {
        
        const images = await getGifs('goku');
        
        expect(images.length).toBe(10);
    });
    
})
