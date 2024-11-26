// src/components/DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  // Get the initial dark mode state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Update the document's class for dark mode and save preference to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full dark:bg-gray-200 bg-gray-800"
    >
      {isDarkMode ? (
        <FaMoon className="text-xl text-yellow-500" />
      ) : (
        <FaSun className="text-xl text-yellow-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;
