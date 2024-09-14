import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center p-4 sm:p-6 w-full">
      <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-md w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies..."
          className="flex-grow bg-white pl-3 text-base font-semibold outline-none rounded-l-lg"
          aria-label="Search for movies"
        />
        <button
          type="submit"
          className="bg-yellow-400 p-3 rounded-r-lg text-black font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
          aria-label="Search"
        >
          <AiOutlineSearch className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
