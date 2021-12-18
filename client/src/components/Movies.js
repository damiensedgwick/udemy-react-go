import React, {useState} from "react";
import {NavLink, Outlet} from "react-router-dom";

export const Movies = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8080/v1/movies')
      .then((response) => {

        if (response.status !== 200) {
          let err = Error
          err.message = "Invalid response code: " + response.status
          setError({error: err})
        }

        return response.json()
      })
      .then((json) => {
        setMovies(json.movies)
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
      <h2 className="text-xl mb-4">Choose a Movie!</h2>

      <ul className="space-y-1 flex flex-col mb-8">
        {movies.map((movie) => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </NavLink>
        ))}
      </ul>

      <Outlet/>
    </div>
  );
};
