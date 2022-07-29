import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./index.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  }
    
  return (
    <nav
      id="navbar"
      className="flex flex-row justify-between bg-black py-5 px-10 rounded items-center"
    >
      <h2>
        <Link to="/" className="text-white flex flex-row text-3xl">
          <BiCameraMovie className="mr-3 mt-1 " />
          Alchemistic Movies
        </Link>
      </h2>
      <form onSubmit={handleSearch} className="bg-gray-500 rounded px-5">
        <input
          type="text"
          placeholder="Busque um filme"
          className="text-start py-1 px-2 rounded-lg bg-gray-500"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="ml-5 hover:bg-transparent">
          <BiSearchAlt2 className="transition ease-in-out duration-300 mt-2 text-black hover:text-red-600" />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
