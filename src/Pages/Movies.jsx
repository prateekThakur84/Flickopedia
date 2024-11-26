import React, { useState, useEffect, useContext, useRef } from 'react'; // Import useRef
import axios from 'axios';
import { Card } from '../Components/UI/Card';
import SearchBar from '../Components/UI/SearchBar';
import { Loading } from '../Components/Layout/Loading';
import { FavoritesContext } from '../Components/UI/FavoiteContext'; // Ensure correct path

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('batman');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const scrollContainerRef = useRef(null); // useRef correctly initialized here

  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext); // Access favorites context

  // Fetch movies based on query and page number
  const fetchMovies = async (query, page = 1) => {
    setError('');
    setLoading(true);

    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          s: query,
          apikey: `${import.meta.env.VITE_API_KEY}`,
          page: page,
        },
      });

      if (response.data.Response === 'True') {
        setMoviesData((prevMovies) => [
          ...prevMovies,
          ...(response.data.Search || []),
        ]);
        setTotalResults(parseInt(response.data.totalResults, 10));
      } else {
        setMoviesData([]);
        setError(response.data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    query = query.trim();
    if (query) {
      setQuery(query);
      setPage(1);
      setMoviesData([]);
      fetchMovies(query, 1);
    } else {
      setMoviesData([]);
    }
  };

  const loadMore = () => {
    if (loading || moviesData.length >= totalResults) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  useEffect(() => {
    fetchMovies(query, page);
  }, [query, page]);

  const getUniqueKey = (movie) => {
    return `${movie.imdbID}-${movie.Title}`;
  };

  return (
    <div className="bg-white dark:bg-slate-700 min-h-screen p-4" ref={scrollContainerRef}>
      {loading && <Loading />}
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 flex items-center justify-center">{error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {moviesData.map((currMovie) => {
          const isFavorite = favorites.some((fav) => fav.imdbID === currMovie.imdbID); // Check if movie is favorite
          return (
            <Card
              key={getUniqueKey(currMovie)}
              currMovie={currMovie}
              isFavorite={isFavorite}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          );
        })}
      </ul>
      {!loading && (
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={loadMore}
            className="bg-yellow-400 p-2 px-4 rounded font-semibold"
            disabled={loading || moviesData.length >= totalResults}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
