import { Link, NavLink } from "react-router-dom";
import { useMovie } from "../hook/useFetch";
import { GaleryMovie } from "./GaleryMovie";

export const CarruselMovie = () => {
  const { data } = useMovie(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=e9042e5e29d7e9f52a46a6defc067d82`
  );

  return (
    <>
      <h1 className="titlePopulares">Populares del Día</h1>
      <section className="populares">
        {data?.results?.map((movie) => (
          <article className="populares-movie" key={movie.id}>
            <Link to={`/caracteristica-pelicula/${movie.id}`}>
              <img
                className="populares-img"
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </article>
        ))}
      </section>
      <GaleryMovie />
    </>
  );
};
