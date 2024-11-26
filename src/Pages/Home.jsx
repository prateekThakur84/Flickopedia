import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp)",
        }}
      >
        {/* Overlay for background image */}
        <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50"></div>
        
        {/* Centered Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div>
            {/* Heading */}
            <h1 className="text-3xl font-extrabold mb-4 dark:text-tyellow">
              Dive into the World of Movies, Web Series, and TV Shows
            </h1>

            {/* Subtitle */}
            <p className="text-lg bg-black dark:bg-tyellow text-tyellow dark:text-tblack mb-8 font-bold hover:dark:bg-syellow">
              Explore the latest blockbusters, timeless classics, and hidden gems.
            </p>

            {/* Link to Movies Page */}
            <NavLink
              to="/movies"
              className="px-8 py-3 bg-tyellow dark:bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-syellow  dark:hover:bg-syellow transition"
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
