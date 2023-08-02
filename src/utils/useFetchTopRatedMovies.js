import axios from 'axios'
import { useState, useEffect} from 'react';
import {MOVIE_DATA_TOPRATED_URI, API_KEY} from './constants';

const useFetchTopRatedMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
    useEffect(() => {
      fetchTopRatedMovies()
    },[])
    const fetchTopRatedMovies = async() => {
      try {
        const response = await axios.get(MOVIE_DATA_TOPRATED_URI, {
          params: {
            api_key: API_KEY
          }
        })
        setTopMovies(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
  return {topMovies}
}

export default useFetchTopRatedMovies