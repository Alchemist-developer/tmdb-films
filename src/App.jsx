import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="movie/:id"> Movie</Link>
      </h2>
      <h2>
        <Link to="search"> Search</Link>
      </h2>
      <Outlet />
    </div>
  );
}

export default App;
