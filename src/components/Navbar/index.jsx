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
      className="shadow-[0_1px_33px_-30px_rgba(255,255,255)] flex flex-wrap justify-between bg-black py-5 px-10 items-center"
    >
      <h2>
        <Link to="/" className="text-white flex flex-row font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-black to-yellow-100">
          <BiCameraMovie className="mr-3 mt-1" />
          ALCHEMISTIC MOVIES
        </Link>
      </h2>
      <form onSubmit={handleSearch} className="my-4 bg-gray-500 rounded px-5">
        <input
          type="text"
          placeholder="Busque um filme"
          className="text-start py-1 px-2 rounded-lg bg-gray-500"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="ml-5 hover:bg-transparent">
          <p className="transition ease-in-out duration-300 hover:sepia">⚗️</p>
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
