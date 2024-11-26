const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-tblack dark:text-yellow-400">
            About Flickopedia
          </h1>
          <p className="mt-4 text-tblue font-bold dark:text-gray-300 text-lg">
            Discover everything you need to know about your favorite films and shows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission and Vision Statements */}
          <div>
            <h2 className="text-2xl font-bold dark:text-yellow-400 mb-4">
              Our Mission
            </h2>
            <p className="text-tblack dark:text-white mb-6 font-semibold">
              At Flickopedia, we bring you the most comprehensive database of movie details, cast information, reviews, and ratings. We aim to provide movie lovers with all the information they need in one place.
            </p>

            <h2 className="text-2xl font-bold dark:text-yellow-400 mb-4">
              Our Vision
            </h2>
            <p className="text-tblack dark:text-white font-semibold">
              We envision Flickopedia as the ultimate destination for movie enthusiasts to explore, learn, and discover new films while diving deep into their favorite flicks.
            </p>
          </div>

          {/* Flickopedia Logo Image */}
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
          {/* Entertainment Image */}
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

          {/* Why Choose Flickopedia */}
          <div>
            <h2 className="text-2xl font-bold dark:text-yellow-400 mb-4">
              Why Choose Flickopedia?
            </h2>
            <ul className="list-disc list-inside dark:text-white text-tblack space-y-4 font-semibold">
              <li>Information about movies from all genres.</li>
              <li>Up-to-date news on upcoming films and releases.</li>
              <li>Extensive cast and crew details for every title.</li>
              <li>Accurate reviews and ratings from trusted sources.</li>
              <li>Designed to offer the best user experience.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-tblack dark:text-white">
            Ready to explore the world of movies?{" "}
            <span className="font-semibold text-tblue">
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
