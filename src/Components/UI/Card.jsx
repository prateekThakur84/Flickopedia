import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import Button from './Button'; // Import Button component
import { FaStar } from 'react-icons/fa'; // Import star from react-icons

// Card component to display individual movie details
export const Card = ({ currMovie, isFavorite, addFavorite, removeFavorite }) => {
  const { Poster, imdbID, Title } = currMovie;

  // Function to toggle favorite
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(currMovie); // Remove from favorites if already favorited
    } else {
      addFavorite(currMovie); // Add to favorites if not yet favorited
    }
  };

  return (
    <li className="bg-syellow dark:bg-gray-800 dark:hover:bg-syellow text-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl mb-6">
      {/* Movie poster image */}
      <img
        src={Poster}
        alt="Movie Poster"
        className="w-full h-auto sm:h-72 md:h-80 object-cover rounded-t-lg"
      />

      {/* Movie details button */}
      <div className="mt-2 text-center">
        <NavLink to={`/movies/${imdbID}`}>
          <Button className="w-full px-4 py-2 text-center text-white bg-yellow-400 rounded-b-lg hover:bg-yellow-500 transition-colors">
            Movie Details
          </Button>
        </NavLink>
      </div>

      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick} // Toggle favorite on click
        className={`absolute top-2 right-2 ${isFavorite ? 'text-yellow-500' : 'text-white'} hover:text-yellow-400 text-2xl`}
      >
        <FaStar />
      </button>
    </li>
  );
};

export default Card;
