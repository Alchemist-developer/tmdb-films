import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="">
      <img className="h-80" src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2 className="py-1">{movie.title}</h2>
      <p className="flex flex-row items-center text-xs mb-1">
        <FaStar className="mr-2 text-yellow-500"/> {movie.vote_average}
      </p>
      {showLink && 
      <Link className="text-black rounded opacity-50 p-1 px-3 bg-white hover:ml-1 hover:text-gray-500" to={`/movie/${movie.id}`}>
      Detalhes
      </Link>}
    </div>
  );
};

export default MovieCard;
