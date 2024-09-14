import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../Components/UI/Card';
import SearchBar from '../Components/UI/SearchBar';
import { Loading } from '../Components/Layout/Loading';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('batman');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query, page = 1) => {
    setError('');
    setLoading(true); // Set loading to true at the start of the fetch
    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          s: query,
          apikey: `${import.meta.env.VITE_API_KEY}`, // Use environment variable for API key
          page: page, // Pass the page parameter
        },
      });
      if (response.data.Response === 'True') {
        setMoviesData((prevMovies) => [
          ...prevMovies,
          ...(response.data.Search || []),
        ]);
      } else {
        setMoviesData([]);
        setError(response.data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  const handleSearch = (query) => {
    if (query.trim()) {
      setQuery(query);
      setPage(1); // Reset page to 1 for a new search
      setMoviesData([]); // Clear current results
      fetchMovies(query, 1);
    } else {
      setMoviesData([]);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  useEffect(() => {
    fetchMovies(query, page);
  }, [query, page]);

  return (
    <div className="bg-slate-700 min-h-screen p-4">
      {loading && <Loading />}

      <SearchBar onSearch={handleSearch} />

      {error && <p className="text-red-500 flex items-center justify-center">{error}</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {moviesData.map((currMovie, index) => (
          <Card key={currMovie.imdbID + index} currMovie={currMovie} />
        ))}
      </ul>

      {!loading && (
        <div className="flex items-center justify-center mt-8">
          <button onClick={loadMore} className="bg-yellow-400 p-2 px-4 rounded font-semibold">
            More Movies...
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
