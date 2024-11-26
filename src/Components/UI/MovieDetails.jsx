import { useLoaderData, useLocation } from "react-router-dom";
import { FaShareAlt, FaPlay } from "react-icons/fa"; // Import icons from react-icons
import Button from "./Button"; // Import reusable Button component

// YouTube Data API Key
const YOUTUBE_API_KEY = "AIzaSyBPIqQh-QHMPGHTwjSqi3191AsdmBJqAAs";

export const MovieDetails = () => {
  const movieData = useLoaderData(); // Get movie data from loader
  const location = useLocation(); // Get the current location for sharing URL

  const { Poster, Title, Plot, Released, imdbRating, Director, Actors } =
    movieData;

  // Function to handle sharing the movie details link
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${location.pathname}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: Title,
          text: `Check out this movie: ${Title}`,
          url: shareUrl,
        });
        alert("Link shared successfully!");
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy to clipboard", error);
      }
    }
  };

  // Function to fetch the trailer and open it on YouTube
  const openTrailerInYouTube = async () => {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      Title + " trailer"
    )}&key=${YOUTUBE_API_KEY}&maxResults=1&type=video`;

    try {
      const response = await fetch(searchUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
        window.open(youtubeUrl, "_blank"); // Open YouTube trailer in a new tab
      } else {
        alert("Trailer not found.");
      }
    } catch (error) {
      console.error("Failed to fetch trailer", error);
    }
  };

  return (
    <div className="h-auto bg-white dark:bg-gray-800 text-white flex flex-col items-center justify-start p-10">
      <div className="flex flex-col lg:flex-row lg:items-start w-full max-w-6xl">
        {/* Movie Poster */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={Poster}
            alt={Title}
            className="w-fit lg:h-full object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl dark:hover:shadow-yellow-500 hover:shadow-blue-500"
          />
        </div>

        {/* Movie Details */}
        <div className="h-auto w-auto my-auto">
          <div className="mt-8 lg:mt-0 w-full lg:w-2/3 flex text-start flex-col">
            <h2 className="text-4xl text-tblack dark:text-white dark:hover:text-tyellow font-bold mb-4 hover:text-tblue">
              {Title}
            </h2>
            <p className="text-lg text-tblack dark:text-gray-300 mb-6">
              {Plot}
            </p>

            {/* Additional Information */}
            <div className="space-y-4 text-tblack dark:text-white">
              <p>
                <strong>Release Date: </strong>
                {Released}
              </p>
              <p>
                <strong>IMDb Rating: </strong>
                {imdbRating}/10
              </p>
              <p>
                <strong>Director: </strong>
                {Director}
              </p>
              <p>
                <strong>Cast: </strong>
                {Actors}
              </p>
            </div>

            {/* Share and Watch Trailer Buttons */}
            <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 w-full sm:w-auto">
              <Button
                onClick={handleShare}
                className="w-full sm:w-auto flex items-center justify-between space-x-2 py-2 px-4 border rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                <div className="flex items-center justify-evenly space-x-2">
                  <FaShareAlt className="text-lg" />
                  <span className="text-sm sm:text-base">Share Movie</span>
                </div>
              </Button>
              <Button
                onClick={openTrailerInYouTube}
                className="w-full sm:w-auto flex items-center justify-between space-x-2 py-2 px-4 border rounded-lg bg-green-500 hover:bg-green-600 text-white"
              >
                <div className="flex items-center justify-evenly space-x-2">
                  <FaPlay className="text-lg " />
                  <span className="text-sm sm:text-base">Watch Trailer</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
