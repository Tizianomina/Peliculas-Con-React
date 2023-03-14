import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useMovie } from "../hook/useFetch";
import { CategoryMovie } from "./CategoryMovie";

export const GaleryMovie = () => {
  const [pages, setPages] = useState(1);
  const { data } = useMovie(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=e9042e5e29d7e9f52a46a6defc067d82&page=${pages}`
  );

  const nextPage = () => {
    if (pages < 1000) {
      setPages(pages + 1);
    }
  };

  const previousPage = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };

  return (
    <>
      <section className="galery">
        <article className="galery-grilla">
          {data?.results?.map((movie) => (
            <div className="galery-movie" key={movie.id}>
              <Link to={`/caracteristica-pelicula/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  className="galery-movie--img"
                />
                <p className="galery-movie--title">{movie.title}</p>
              </Link>
            </div>
          ))}
        </article>

        <div className="galery-buttons">
          <button onClick={previousPage}>Previuos</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </section>
      <CategoryMovie />
    </>
  );
};
