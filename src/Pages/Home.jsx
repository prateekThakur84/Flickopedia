import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-3xl font-extrabold mb-4">
              Dive into the World of Movies, Web Series, and TV Shows
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore the latest blockbusters, timeless classics, and hidden
              gems.
            </p>
            <NavLink
              to="/movies"
              className="px-8 py-3 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition "
            >
              Explore Details
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
