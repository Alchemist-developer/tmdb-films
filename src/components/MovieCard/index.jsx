import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="bg-gray-900 mx-auto p-3 px-5 rounded">
      <img
        className="py-1 h-80 max-w-full"
        src={imageUrl + movie.poster_path}
        alt={movie.title}
      />
      <h2 className="py-1">{movie.title}</h2>
      <p className="flex flex-row items-center text-xs py-1 mb-1">
        <FaStar className="mr-2 text-yellow-500" /> {movie.vote_average}
      </p>
      {showLink && (
        <div className="flex justify-center">
          <Link
            className="transition ease-in-out duration-500 text-center w-full text-black rounded opacity-50 p-1 border-2 bg-white hover:bg-transparent hover:border-2 hover:border-yellow-100 hover:text-yellow-500"
            to={`/movie/${movie.id}`}
          >
            Detalhes
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
