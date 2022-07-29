import { useState, useEffect } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// import { Container } from './styles';

function Home() {
  console.log(moviesURL, apiKey + 'aqui');
  // const [topMovies, setTopMovies] = useState([]);
  
  // const getTopRatedMovies = async (url) => {
  //   const res = await fetch(url);
  //   const data = await res.json();



  // useEffect(() => {

  //   const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
  //   // console.log(topRatedURL);
  //   getTopRatedMovies(topRatedURL);

  // }, [])

  // console.log(moviesURL, apiKey);

  return (
  <>Home</>
  );
}

export default Home;
