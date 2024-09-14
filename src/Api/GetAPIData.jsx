export const getMoviesData = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error){
    console.log(error);
  }
};

//we can use this method also but we will fetch using axios 
