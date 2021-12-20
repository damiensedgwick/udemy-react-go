import React from "react";
import {useParams} from "react-router-dom";

export const Genre = () => {
  const params = useParams();
  const genreId = parseInt(params.genreId, 10);

  const [genre, setGenre] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:8080/v1/genres/${genreId}`)
      .then((response) => {

        if (response.status !== 200) {
          let err = Error
          err.message = "Invalid response code: " + response.status
          setError({error: err})
        }

        return response.json()
      })
      .then((json) => {
          setGenre(json.genre)
          setIsLoading(false)
        },
        (error) => {
          setIsLoading(false)
          setError(error)
        }
      )
  }, [genreId]);

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
      <h2 className="text-xl mb-4">One Genre</h2>
    </div>
  );
};
