import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import "../.././App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-yellow-300 text-2xl font-bold">
          <a href="/" className="hover:text-yellow-400">
            Flickopedia
          </a>
        </div>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-yellow-300 focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Menu Links (shown on larger screens, hidden on small) */}
        <div className="hidden lg:flex space-x-4 font-bold">
          <NavLink to="/" className="text-white hover:text-yellow-400">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-yellow-400">
            About
          </NavLink>
          <NavLink to="/movies" className="text-white hover:text-yellow-400">
            Movies
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-yellow-400">
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <NavLink
              to="/"
              className="text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/movies"
              className="text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Movies
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white hover:text-yellow-400"
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
