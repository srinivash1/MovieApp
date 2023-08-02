import { useState, useEffect } from 'react';
import axios from 'axios';
import { MOVIE_DATA_URI, API_KEY} from './constants';

const useFetchMovie = () => {
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        fetchMovieData();
    },[])
    const fetchMovieData = async () => {
        try {
            const response = await axios.get(MOVIE_DATA_URI,{
                params: {
                    api_key: API_KEY,
                }
            });
            setMovieData(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }
 return { movieData }
}

export default useFetchMovie