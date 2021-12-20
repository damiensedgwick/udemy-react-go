import React, {useState} from "react";
import {useParams} from "react-router-dom";

export const Movie = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId, 10);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:8080/v1/movie/${movieId}`)
      .then((response) => {

        if (response.status !== 200) {
          let err = Error
          err.message = "Invalid response code: " + response.status
          setError({error: err})
        }

        return response.json()
      })
      .then((json) => {
          setMovie(json.movie)
          setIsLoading(false)
        },
        (error) => {
          setIsLoading(false)
          setError(error)
        }
      )
  }, [movieId]);

  if (isLoading) return (
    <div>
      <h2 className="text-xl mb-4">Loading...</h2>
    </div>
  )

  if (error) return (
    <div>
      <h2 className="text-xl mb-4">{`Error: ${error.message}`}</h2>
    </div>
  )

  return (
    <div className="border border-black py-4 px-6 space-y-4">
      <h3 className="text-2xl">{movie.title}</h3>
      <p>{movie.description}</p>
      <p>
        <small>
          Genre:
          {Object.keys(movie.genres).map((genre) => (
            <>{" " + movie.genres[genre] + " "}</>
          ))}
        </small>
      </p>
      <p>
        <small>runtime approx {movie.runtime} mins</small>
      </p>
    </div>
  );
};
