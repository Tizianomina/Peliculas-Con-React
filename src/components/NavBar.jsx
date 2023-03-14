import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useMovie } from "../hook/useFetch";
import { LeakedMovie } from "./LeakedMovie";

export const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);

  const { data } = useMovie(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=e9042e5e29d7e9f52a46a6defc067d82`
  );

  const handleSearch = () => {
    const filtered = data?.results?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log("Los valores que se han filtrado son: ", filtered);
    setFilteredMovie(filtered);
    setSearchValue('')
  };

  console.log(filteredMovie);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <header className="header">
        <NavLink to={"/"}>
          <h1 className="header-title">MovieApp</h1>
        </NavLink>
        <div className="header-search">
          <input
            type="text"
            className="header-text"
            value={searchValue}
            onChange={handleChange}
          />

          
            <button className="header-btn" onClick={handleSearch}>
              <Link to="/leaked-movie">
              Search
          </Link>
            </button>
        </div>
      </header>
      <Routes>
        <Route
          path="/leaked-movie"
          element={<LeakedMovie filteredMovie={filteredMovie} />}
        />
      </Routes>
    </>
  );
};
