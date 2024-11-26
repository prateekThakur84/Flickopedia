import React, { useContext } from 'react';
import { FavoritesContext } from '../Components/UI/FavoiteContext'; // Import FavoritesContext
import { Card } from '../Components/UI/Card'; // Import Card component
import { RiH1 } from 'react-icons/ri';

const Favorites = () => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext); // Access favorites, addFavorite, and removeFavorite from context

  return (
    <div className="bg-white dark:bg-slate-700 min-h-screen p-4">
      <h1 className="text-center text-2xl font-semibold mb-6 dark:text-white">Your Favorite Movies</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <Card
              key={movie.imdbID}
              currMovie={movie}
              isFavorite={true}
              addFavorite={addFavorite} // Pass addFavorite
              removeFavorite={removeFavorite} // Pass removeFavorite
            />
          ))
        ) : (
          <h1 className='dark:text-white text-black '>No favorite movie available...</h1>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
