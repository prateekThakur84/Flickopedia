import React, { createContext, useState, useEffect } from 'react';

// Create context
export const FavoritesContext = createContext();

// Favorites Context Provider
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorite movies from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Store favorite movies to localStorage whenever it changes
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  // Add a movie to favorites
  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.imdbID === movie.imdbID)) {
        const updatedFavorites = [...prevFavorites, movie];
        return updatedFavorites;
      }
      return prevFavorites;
    });
  };

  // Remove a movie from favorites
  const removeFavorite = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
