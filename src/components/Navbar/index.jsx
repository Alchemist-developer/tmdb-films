import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

// import { Container } from './styles';

function Navbar() {
  return (
    <nav
      id="navbar"
      className="flex flex-row justify-around bg-black py-4 rounded"
    >
      <h2>
        <Link to="/" className="text-white flex flex-row">
          <BiCameraMovie className="mr-3 mt-1" />
          Home
        </Link>
      </h2>
      <form className="bg-gray-100 rounded px-5 ">
        <input
          type="text"
          placeholder="Busque um filme"
          className="text-center"
        />
        <button type="submit" className="pl-4">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
