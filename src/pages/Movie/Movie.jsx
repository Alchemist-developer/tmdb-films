import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieURL);
  }, []);

  return (
    <div className="">
      {movie && (
        <div className="mb-3 rounded-md p-6 bg-gray-900 opacity-80 mt-3 flex flex-col mx-auto max-w-md space-y-2 text-sm">
          <MovieCard movie={movie} showLink={false} />
          <p className="text-center w-full font-bold">
            <hr className="opacity-10" />
            {movie.tagline} <hr className="opacity-10 pb-4" />
          </p>

          <div className="flex">
            <BsWallet2 className="mr-2 text-yellow-500" />
            <h3 className="mr-2 font-bold "> Orçamento:</h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="flex">
            <BsGraphUp className="mr-2 text-yellow-500" />
            <h3 className="mr-2 font-bold  "> Receita:</h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div className="flex">
            <BsHourglassSplit className="mr-2 text-yellow-500" />
            <h3 className="mr-2 font-bold  "> Duração:</h3>
            <p>{movie.runtime}min.</p>
          </div>

          <div className="flex flex-col">
            <h3 className="mr-2 font-bold  "> Descrição:</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
