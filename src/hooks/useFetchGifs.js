import { useEffect, useState } from "react"
import getGifs from "../helpers/Gifts";


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({data:[], isLoading: true});

    useEffect(() => {
        getGifs(category).then(images => {
            setstate({data:images, isLoading:false});
        });
    }, [category]);


    return state;
    
}
