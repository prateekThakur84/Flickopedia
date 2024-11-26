import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "../UI/DarkModeToggle"; // Dark mode toggle component
import "../../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-tyellow dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#010101] dark:text-tyellow text-2xl font-bold">
          <a href="/" className="dark:hover:text-syellow">
            Flickopedia
          </a>
        </div>

        {/* Mobile Icons and Dark Mode Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <DarkModeToggle />
          <button
            onClick={toggleMenu}
            className="dark:text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-4 font-bold items-center">
          <NavLink to="/" className="text-gray-900 dark:text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-900 dark:text-white">
            About
          </NavLink>
          <NavLink to="/movies" className="text-gray-900 dark:text-white">
            Movies
          </NavLink>
          <NavLink to="/favorites" className="text-gray-900 dark:text-white">
            Favorite
          </NavLink>
          <NavLink to="/contact" className="text-gray-900 dark:text-white">
            Contact
          </NavLink>
          <DarkModeToggle /> {/* Dark mode toggle for desktop */}
        </div>
      </div>

      {/* Mobile Menu (only visible when isOpen is true) */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <NavLink
              to="/"
              className="text-gray-900 dark:text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-900 dark:text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/movies"
              className="text-gray-900 dark:text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Movies
            </NavLink>
            <NavLink
              to="/favorites"
              className="text-gray-900 dark:text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Favorite
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-900 dark:text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
