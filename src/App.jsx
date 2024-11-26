import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavoritesProvider } from "./Components/UI/FavoiteContext";  // Import the provider
import Home from "./Pages/Home";
import About from "./Pages/About";
import Movies from "./Pages/Movies";
import Favorites from "./Pages/Favorites";  // Import the Favorites page
import { Contact, contactData } from "./Pages/Contact";
import AppLayout from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesDetails } from "./Api/GetMovieDatails";
import { MovieDetails } from "./Components/UI/MovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Movies",
          element: <Movies />,
        },
        {
          path: "/Movies/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/Favorites",
          element: <Favorites />,  // Route for Favorites page
        },
        {
          path: "/Contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return (
    <FavoritesProvider>  {/* Wrap your app with the FavoritesProvider */}
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
};

export default App;
