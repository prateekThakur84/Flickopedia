import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Movies from "./Pages/Movies";
import { Contact, contactData } from "./Pages/Contact";

import AppLayout from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
// import { getMoviesData } from "./Api/GetApiData";
import { getMoviesDetails } from "./Api/GetMovieDatails";
import { MovieDetails } from "./Components/UI/MovieDetails";


const App = ()=>{
  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,

      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/About",
          element: <About/>
        },
        {
          path: "/Movies",
          element: <Movies/>,
          // loader: getMoviesData
        },
        //dynamic route
        {
          path: "/Movies/:movieID",
          element: <MovieDetails/>,
          loader: getMoviesDetails
        },
        {
          path: "/Contact",
          element: <Contact/>,
          action: contactData,
        }
      ]
    }
    
    
  ])
  
  return <RouterProvider router={router}/>
}
export default App;

