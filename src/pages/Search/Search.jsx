import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");


  return (
    <div className="container mx-auto ">
      <h1 className="ml-2 text-2xl hover:text-white  cursor-pointer py-5 w-max transition ease-in-out duration-300 ">
        Resultados para: <span className="text-yellow-100">{query}</span>
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
        {movies.length === 0 && <p className="text-white">Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
