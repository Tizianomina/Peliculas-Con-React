import { Link } from "react-router-dom";

export const LeakedMovie = ({ filteredMovie }) => {
  return (
    <section className="movies">
      {filteredMovie?.map((movie) => (
        <article className="movies-movie" key={movie.id}>
          <img
            className="movies-movie--img"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movies-movie--description">
            <h2 className="movies-movie--title">Title:</h2>
            <p className="movies-movie--p">{movie.title}</p>
            <h2 className="movies-movie--title">Description:</h2>
            <p className="movies-movie--p">{movie.overview}</p>
            <button className="movies-movie--btn">
              <Link to={`/caracteristica-pelicula/${movie.id}`}>Ver</Link>
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};
