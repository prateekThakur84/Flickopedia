const About = () => {
  return (
    <section className="bg-gray-900 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400">
            About Flickopedia
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Discover everything you need to know about your favorite films and
            shows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400 mb-6">
              At Flickopedia, we bring you the most comprehensive database of
              movie details, cast information, reviews, and ratings. We aim to
              provide movie lovers with all the information they need in one
              place.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-400">
              We envision Flickopedia as the ultimate destination for movie
              enthusiasts to explore, learn, and discover new films while diving
              deep into their favorite flicks.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gray-700 rounded-lg flex justify-center items-center overflow-hidden">
              <figure className="w-full h-full">
                <img
                  src="./flickopedia.png"
                  alt="Flickopedia Logo"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

          <div className="flex justify-center items-center">
            <div className="w-full h-64 bg-gray-700 rounded-lg flex justify-center items-center overflow-hidden">
              <figure className="w-full h-full">
                <img
                  src="https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Movie Entertainment"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Why Choose Flickopedia?
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-4">
              <li>Information about movies from all genres.</li>
              <li>Up-to-date news on upcoming films and releases.</li>
              <li>Extensive cast and crew details for every title.</li>
              <li>Accurate reviews and ratings from trusted sources.</li>
              <li>Designed to offer the best user experience.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-400">
            Ready to explore the world of movies?{" "}
            <span className="font-semibold text-yellow-400">
              Explore Flickopedia now!
            </span>
          </p>
          <a
            href="/movies"
            className="mt-6 inline-block px-8 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 font-bold"
          >
            Explore Movies
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
