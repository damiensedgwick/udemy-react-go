import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {Loading} from "./Loading";
import {Error} from "./Error";

export const Movie = () => {
  const navigate = useNavigate()
  const params = useParams();
  const movieId = parseInt(params.movieId, 10);
  const {data, error} = useFetch(`http://localhost:8080/v1/movie/${movieId}`)

  if (!data) return (
    <Loading />
  )

  if (error) return (
    <Error />
  )

  return (
    <>
      <button onClick={() => navigate("/movies")}>Back</button>
      <div className="border border-black py-4 px-6 space-y-4">
        <h3 className="text-2xl">{data.movie.title}</h3>
        <p>{data.movie.description}</p>
        <p>
          <small>
            Genre:
            {Object.keys(data.movie.genres).map((genre) => (
              <>{" " + data.movie.genres[genre] + " "}</>
            ))}
          </small>
        </p>
        <p>
          <small>runtime approx {data.movie.runtime} mins</small>
        </p>
      </div>
    </>
  );
};
