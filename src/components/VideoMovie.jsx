import { useEffect, useState } from "react";

export const VideoMovie = ({ id }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e9042e5e29d7e9f52a46a6defc067d82&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setTrailer(data.results[0]));
  }, [id]);

  return (
    <div>
      {trailer ? (
        <div>
          <iframe
            className="video-trailer"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            allowFullScreen

          ></iframe>
        </div>
      ) : (
        <p>No se ha encontrado el video</p>
      )}
    </div>
  );
};
