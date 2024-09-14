import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  const { Poster, Title, Plot, Released, imdbRating, Director, Actors} = movieData;

  return (
    <div className="h-auto bg-gray-800 text-white flex flex-col items-center justify-start p-10">

      <div className="flex flex-col lg:flex-row lg:items-start w-full max-w-6xl">
       
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={Poster}
            alt={Title}
            className="w-fit lg:h-full object-cover rounded-lg"
          />
        </div>

        <div className="h-auto w-auto my-auto">

        <div className="mt-8 lg:mt-0  w-full lg:w-2/3  flex text-start flex-col">
          <h2 className="text-4xl font-bold mb-4">{Title}</h2>
          <p className="text-lg text-gray-300 mb-6">{Plot}</p>

          <div className="space-y-4">
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
          
        </div>
              </div>
      </div>
    </div>
  );
};
