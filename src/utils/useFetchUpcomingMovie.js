import { useState, useEffect } from 'react';
import { API_KEY, MOVIE_DATA_UPCOMING_URI } from './constants';
import axios from 'axios';

const useFetchUpcomingMovie = (search) => {
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);

  const filterMovieBySearch = (movies, searchQuery) => {
    if (!searchQuery || typeof searchQuery !== 'string') {
      return movies; // If searchQuery is not a string or is empty, return the unfiltered movie array
    }
    const trimmedQuery = searchQuery.trim().toLowerCase();
    return movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(trimmedQuery)
    );
  };

  useEffect(() => {
    fetchUpcomingMovie();
  }, []); // Empty dependency array, runs only once on component mount

  const fetchUpcomingMovie = async () => {
    setLoading(true);
    try {
      const response = await axios.get(MOVIE_DATA_UPCOMING_URI, {
        params: {
          api_key: API_KEY,
        },
      });
      setPopularMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Filter movies when the search prop changes
  const filteredMovies = filterMovieBySearch(popularMovies, search);

  return { popularMovies: filteredMovies, loading };
};

export default useFetchUpcomingMovie;
