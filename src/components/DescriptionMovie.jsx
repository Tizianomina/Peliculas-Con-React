import { Link, useParams } from "react-router-dom";
import { useMovie } from "../hook/useFetch";
import { SimilarMovie } from "./SimilarMovie";
import { VideoMovie } from "./VideoMovie";

export const DescriptionMovie = () => {
  const { id } = useParams();

  const { data: movie } = useMovie(
    `https://api.themoviedb.org/3/movie/${id}?api_key=e9042e5e29d7e9f52a46a6defc067d82&language=en-US`
  );

  return (
    <div>
      {movie ? (
        <div>
          <section className="description">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              className="description-movie--img"
            />

            <div className="description-movie--video">
              <VideoMovie id={id} />
            </div>
          </section>
          <article className="description-text">
            <h2 className="description-movie--title">Titulo:</h2>
            <p className="description-movie--p">{movie.title}</p>
            <h2 className="description-movie--text">descripcion:</h2>
            <p className="description-movie--p">{movie.overview}</p>
            <Link to={movie.homepage} className="description-movie--link">
              {movie.homepage ? (
                <p className="urlTrue">
                  La puedes disfrutar haciendo clic aquí
                </p>
              ) : (
                <p className="urlFalse">La url no existe por el momento</p>
              )}
            </Link>
          </article>
        </div>
      ) : (
        <h1>No se encontro la informacion deseada</h1>
      )}
      <SimilarMovie id={id} />
    </div>
  );
};
