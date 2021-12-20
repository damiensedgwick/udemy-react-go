import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/v1/genres')
      .then((response) => {

        if (response.status !== 200) {
          let err = Error
          err.message = "Invalid response code: " + response.status
          setError({error: err})
        }

        return response.json()
      })
      .then((json) => {
          setGenres(json.genres)
          setIsLoading(false)
        },
        (error) => {
          setIsLoading(false)
          setError(error)
        }
      )
  }, []);

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
    <div>
      <h2 className="text-xl mb-4">Genres</h2>

      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link to={`/genre/${genre.id}`}>{genre.genre_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
