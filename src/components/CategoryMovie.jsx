import { useMovie } from "../hook/useFetch";

export const CategoryMovie = () => {
  const { data } = useMovie(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=e9042e5e29d7e9f52a46a6defc067d82&language=en-US`
  );

  return (
    <>
      <h1 className="titleCategory">Variedades de categorías para disfutar</h1>

      <section className="categorys">
        {data?.genres.map((genre) => (
          <p className="categorys-text" key={genre.id}>
            {genre.name}
          </p>
        ))}
      </section>
    </>
  );
};
