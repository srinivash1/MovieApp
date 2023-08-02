import { useState, useEffect} from 'react';
import { API_KEY, MOVIE_DATA_UPCOMING_URI } from './constants';
import axios from 'axios';

const useFetchUpcomingMovie = () => {
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetchUpcomingMovie();
    },[])
    
    const fetchUpcomingMovie = async () => {
        try {
           const response = await axios.get(MOVIE_DATA_UPCOMING_URI, {
            params: {
                api_key :API_KEY
            }
           }) 
           setPopularMovies(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }
 return {popularMovies}
}

export default useFetchUpcomingMovie