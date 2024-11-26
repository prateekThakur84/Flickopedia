  import React, { useState } from 'react';
  import { AiOutlineSearch } from 'react-icons/ai';

  const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    // Update query state on input change
    const handleChange = (e) => {
      setQuery(e.target.value);
    };

    // Trigger search on form submit
    const handleSubmit = (e) => {
      e.preventDefault();
      if (query.trim()) {
        onSearch(query);
      }
    };

    
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center p-4 sm:p-6 w-full"
      >
        <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-md w-full max-w-md">
          
          {/* Search input field */}
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search for movies..."
            className="flex-grow bg-white pl-3 text-base font-semibold outline-none rounded-l-lg"
            aria-label="Search for movies"
          />

          {/* Search button */}
          <button
            type="submit"
            className="bg-yellow-400 p-3 rounded-r-lg text-black font-semibold hover:bg-tblue transition-colors flex items-center justify-center"
            aria-label="Search"
          >
            <AiOutlineSearch
              className="w-6 h-6 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out transform"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>
    );
  };

  export default SearchBar;
