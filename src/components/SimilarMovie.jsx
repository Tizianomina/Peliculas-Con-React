import { NavLink } from "react-router-dom";
import { useMovie } from "../hook/useFetch";

export const SimilarMovie = ({id}) => {
  const { data } = useMovie(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=e9042e5e29d7e9f52a46a6defc067d82&language=en-US&page=1`
  );
  return (
    <section className="similars">
      {data?.results?.map(movie=>(
        <article className="similars-movie" key={movie.id}>
          <NavLink to={`/caracteristica-pelicula/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt=""
          className="similars-movie-img"
        />
          </NavLink>

      </article>
      ))}
    </section>
  );
};
