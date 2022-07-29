import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl hover:text-white cursor-pointer">Top Rated Movies</h1>
      <div className="grid grid-cols-4 gap-10">
      {topMovies.length === 0 && <p className="text-white">Carregando...</p>}
      {topMovies.length > 0 && topMovies.map((movie) => 
      <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
};

export default Home;
