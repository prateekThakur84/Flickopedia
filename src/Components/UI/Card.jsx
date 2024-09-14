import { NavLink } from "react-router-dom";
import Button from "./Button";

export const Card = ({ currMovie }) => {
  const { Poster, imdbID } = currMovie;

  return (
    <li className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl mb-6">
       <img
        src={Poster}
        alt="Movie Poster"
        className="w-full h-auto sm:h-72 md:h-80 object-cover rounded-t-lg"
      />

      <div className="mt-2 text-center">
        <NavLink to={`/movies/${imdbID}`}>
          <Button className="w-full px-4 py-2 text-center text-white bg-yellow-400 rounded-b-lg hover:bg-yellow-500 transition-colors">
            Movie Details
          </Button>
        </NavLink>
      </div>
    </li>
  );
};
